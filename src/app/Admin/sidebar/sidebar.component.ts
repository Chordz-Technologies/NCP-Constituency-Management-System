import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router,) { }
  // private sharedService: SharedService

  logout() {
    if (localStorage.getItem('adminType')) {
      localStorage.removeItem('adminType');
    }
    console.log('Logout clicked');
    localStorage.removeItem('adminType');
    localStorage.removeItem('adminId');
    // this.sharedService.setAdminLoggedIn(false);
    this.router.navigate(['']);
  }
}
