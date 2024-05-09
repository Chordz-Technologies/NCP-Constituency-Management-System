import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baramatiMap';

  // isLoggedIn1() {
  //   return !localStorage.getItem('Superadmin');
  // }

  isLoggedIn2() {
    return !localStorage.getItem('adminType');
  }
  // localStorage.removeItem('adminType');
  // localStorage.removeItem('adminId');

  onActive() {
    window.scroll(0, 0);
  }
}
