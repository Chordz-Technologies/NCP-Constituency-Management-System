import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarCollapsed = true;


  // constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // onLogout() {
  //   this.authService.logout();
  // }
}