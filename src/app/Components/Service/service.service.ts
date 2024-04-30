import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Baramati

  getAllData(): Observable<any> {
    return this.http.get<any>(`${this.url}/alldata/`)
  }

  getVillageDetails(): Observable<any> {
    return this.http.get<any>(`${this.url}/alldata/`)
  }

  getVillageDetailsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/villagedetails/${id}/`);
  }

  // deleteVillageById(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.url}/deletedata/${id}/`);
  // }

  updateVillageById(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/updatedata/${id}`, data);
  }

  // Khadakwasla

  getAllDataK(): Observable<any> {
    return this.http.get<any>(`${this.url}/allkdata/`)
  }

  getKhadakwaslaDetails(): Observable<any> {
    return this.http.get<any>(`${this.url}/allkdata/`)
  }

  getKhadakwaslaDetailsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/kvillagedetails/${id}/`);
  }

  // deleteVillageById(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.url}/deletedata/${id}/`);
  // }

  updateKhadakwaslaById(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/updatekdata/${id}`, data);
  }

  // Daund

  getAllDataD(): Observable<any> {
    return this.http.get<any>(`${this.url}/alldaunddata/`)
  }

  getDaundDetails(): Observable<any> {
    return this.http.get<any>(`${this.url}/alldaunddata/`)
  }

  getDaundDetailsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/daundvillagedetails/${id}/`);
  }

  // deleteVillageById(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.url}/deletedata/${id}/`);
  // }

  updateDaundById(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/updateddata/${id}`, data);
  }

  // Indapur

  getAllDataI(): Observable<any> {
    return this.http.get<any>(`${this.url}/allindapurdata/`)
  }

  getIndapurDetails(): Observable<any> {
    return this.http.get<any>(`${this.url}/allindapurdata/`)
  }

  getIndapurDetailsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/indapurvillagedetails/${id}/`);
  }

  // deleteVillageById(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.url}/deletedata/${id}/`);
  // }

  updateIndapurById(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/updateindapurdata/${id}`, data);
  }

  // Purandar

  getAllDataP(): Observable<any> {
    return this.http.get<any>(`${this.url}/allpurandardata/`)
  }

  getPurandarDetails(): Observable<any> {
    return this.http.get<any>(`${this.url}/allpurandardata/`)
  }

  getPurandarDetailsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/purandarvillagedetails/${id}/`);
  }

  // deleteVillageById(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.url}/deletedata/${id}/`);
  // }

  updatePurandarById(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/updatepurandardata/${id}`, data);
  }

  // Bhor

  getAllDataB(): Observable<any> {
    return this.http.get<any>(`${this.url}/allbhordata/`);
  }

  getBhorDetails(): Observable<any> {
    return this.http.get<any>(`${this.url}/allbhordata/`);
  }

  getBhorDetailsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/bhorvillagedetails/${id}/`);
  }

  // deleteVillageById(id: number): Observable<any> {
  //   return this.http.delete<any>(${this.url}/deletedata/${id}/);
  // }

  updateBhorById(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/updatebhordata/${id}`, data);
  }

}
