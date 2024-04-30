import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from '../Service/authservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  adminname: string = '';
  adminpassword: string = '';

  constructor(private router: Router, private toastr: ToastrService, private authService: AuthserviceService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const isLoginPage = event.url === '/adminLogin'; // Adjust the URL for your login page
        if (isLoginPage) {
          // Disable browser forward option
          history.pushState({}, '', location.href);
        }
      }
    });
  }

  login() {
    this.authService.login(this.adminname, this.adminpassword)
      .subscribe({
        next: (result: any) => {
          if (result && result.message === 'Valid User') {
            localStorage.setItem('admin', JSON.stringify(result));
            this.router.navigate(['adminhome/dashboard']);
            this.toastr.success('Login successful!', 'Success');
          } else {
            this.toastr.error('Login failed. Please check your credentials.', 'Error');
          }
        },
        error: (err: any) => {
          console.error('Error:', err);
          this.toastr.error('Invalid credentials. Please check your credentials. ', 'Error');
        }
      });
  }

}
