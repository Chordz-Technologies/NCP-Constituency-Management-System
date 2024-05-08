import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/Service/authservice.service';
import { villageData_model } from 'model';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  villageData_model: villageData_model = new villageData_model()
  loginform!: FormGroup;
  hidePassword: boolean = true;
  isUserLoggedIn!: boolean;

  constructor(private logindata: ServiceService, private router: Router, private toastr: ToastrService, private authService: AuthserviceService, private fb: FormBuilder) { }

  ngOnInit() {
    history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', () => {
      history.pushState(null, document.title, window.location.href);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const isLoginPage = event.url === '/adminLogin'; // Adjust the URL for your login page
        if (isLoginPage) {
          // Disable browser forward option
          history.pushState({}, '', location.href);
        }
      }
    });

    this.loginform = this.fb.group({
      adminname: [''],
      adminpassword: [''],
      options: ['']
    })
  }

  login() {

    this.villageData_model.username = this.loginform.value.adminname,
      this.villageData_model.password = this.loginform.value.adminpassword;
    const selectedOption = this.loginform.value.options;
    this.villageData_model.type_superadmin = selectedOption === '2' ? 1 : 0;
    this.villageData_model.type_admin = selectedOption === '1' ? 1 : 0;
    // this.villageData_model.utypeuser = selectedOption === '3' ? 1 : 0;

    this.logindata.loginpost(this.villageData_model).subscribe({
      next: (result: any) => {
        if (result.message === 'Valid User' && result.admin_type === 'Superadmin') {
          const adminId = result.admin_ID;
          // const status = result.status;
          this.router.navigate(['/adminhome/dashboard']);
          this.toastr.success('Login successful as a Superadmin!', 'Success');
          const admin_type: string = 'Superadmin';
          this.authService.login(admin_type, adminId);

        } else if (result.message === 'Valid User' && result.admin_type === 'Admin') {
          const adminId = result.admin_ID;
          // const status = result.status;
          this.router.navigate(['adminhome/dashboard']);
          this.toastr.success('Login successful as an Admin!', 'Success');
          const admin_type: string = 'Admin';
          this.authService.login(admin_type, adminId);

        } else {
          this.toastr.error('Login failed. Please check your credentials.', 'Error');
        }

      },
      error: (err: any) => {
        console.error('Error:', err);
        this.toastr.error('Invalid credentials. Please check your credentials.', 'Error');
      }
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
