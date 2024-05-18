import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Service/authservice.service';
import { ServiceService } from 'src/app/Service/service.service';
import { ToastrService } from 'ngx-toastr';

interface Message {
  m_id: number;
  message_for: string;
  message: string;
}

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent {
  public dataLoaded: boolean = false;
  loginForm!: FormGroup;
  displayedColumns: string[] = ['Name', 'Birthdate', 'Contact'];
  dataSource!: MatTableDataSource<any>;
  hidePassword: boolean = true;
  messages: Message[] = [];
  userDesignation: string | null = localStorage.getItem('userDesignation');

  constructor(private service: ServiceService, private fb: FormBuilder, private authService: AuthserviceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBirthdayList();
    this.initializeForms();
    this.service.adminMessages().subscribe((data: { all_messages: Message[] }) => {
      if (data && Array.isArray(data.all_messages)) {
        this.filterMessages(data.all_messages);
      }
    });
  }

  filterMessages(allMessages: Message[]): void {
    if (this.userDesignation) {
      this.messages = allMessages.filter((msg: Message) => {
        const levels: string[] = msg.message_for.split(',').map((level: string) => level.trim());
        return levels.includes(this.userDesignation!);
      });
    }
  }

  initializeForms() {
    this.loginForm = this.fb.group({
      q18_response: ['', Validators.required],
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.karyakartaLogin(loginData).subscribe(
        (response) => {
          this.toastr.success('Login successful as Karyakarta', 'Success');
          localStorage.setItem('userDesignation', response.data.designation);
          window.location.reload();
        },
        (error) => {
          console.error('Login error:', error);
          this.toastr.error('Login failed. Please check your mobile number.', 'Error');
        }
      );
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  logout() {
    localStorage.removeItem('userDesignation');
    window.location.reload();
  }

  getBirthdayList() {
    this.service.karykartaBirthdays().subscribe({
      next: (res: any) => {
        this.dataLoaded = true;
        this.dataSource = new MatTableDataSource(res.data);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
