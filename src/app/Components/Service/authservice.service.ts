import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const data = { username, password };
    return this.http.post<any>(`${this.url}/adminlogin/`, data)
      .pipe(
        tap(response => {
          if (response && response.message === 'Valid User') {
            localStorage.setItem('admin', 'true');
          }
        })
      );
  }


  isLoggedIn() {
    return !!localStorage.getItem('admin');
  }

  logout() {
    localStorage.removeItem('admin');
  }
}
