import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn: BehaviorSubject<boolean>;

  private url = environment.apiUrl;

  constructor(private http: HttpClient) {
    // Initialize isLoggedIn BehaviorSubject based on the value stored in localStorage
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    const initialLoggedInStatus = storedLoggedInStatus ? JSON.parse(storedLoggedInStatus) : false;
    this.isLoggedIn = new BehaviorSubject<boolean>(initialLoggedInStatus);
  }

  login(adminType: string, adminId: string) {
    localStorage.setItem('adminType', adminType); // Setting admin type in localStorage
    localStorage.setItem('adminId', adminId);
    this.isLoggedIn.next(true);
  }

  isLoggedIn2() {
    return !!localStorage.getItem('adminType');
  }

  logout() {
    localStorage.removeItem('adminType');
    localStorage.removeItem('adminId');
    this.isLoggedIn.next(false);
  }

  karyakartaLogin(loginData: { q18_response: string }): Observable<any> {
    return this.http.post(`${this.url}/karyakartalogin/`, loginData);
  }
}
