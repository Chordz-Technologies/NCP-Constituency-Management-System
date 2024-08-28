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

  // Login API
  loginpost(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/adminlogin/`, data);
  }

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
    return this.http.put<any>(`${this.url}/updatedaunddata/${id}`, data);
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

  // Survey Form

  getSurveyFormData(): Observable<any> {
    return this.http.get<any>(`${this.url}/allquestions/`);
  }

  submitSurveyFormData(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/addresponse/`, data);
  }

  updateSurveyFormData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/updatequestion/${id}/`, data);
  }

  getSurveyFormDataById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/questiondetails/${id}/`);
  }

  postSurveyFormData(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/addquestion/`, data);
  }

  // Karykarta Form

  getKarykartaFormData(): Observable<any> {
    return this.http.get<any>(`${this.url}/allkquestions/`);
  }

  submitKarykartaFormData(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/addkresponse/`, data);
  }

  updateKarykartaFormData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/updatekquestion/${id}/`, data);
  }

  getKarykartaFormDataById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/kquestiondetails/${id}/`);
  }

  postKarykartaFormData(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/addkquestion/`, data);
  }

  // Notifications

  karykartaBirthdays(): Observable<any> {
    return this.http.get<any>(`${this.url}/kbirthdays/`);
  }

  adminMessages(): Observable<any> {
    return this.http.get<any>(`${this.url}/alladminmessages/`);
  }

  postAdminMessages(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/addadminmessage/`, data);
  }

  // Complaint Messages

  postComplaintMessages(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/addfeedback/`, data);
  }

  viewComplaintMessages(): Observable<any> {
    return this.http.get<any>(`${this.url}/allfeedbacks/`);
  }

  // Reports

  karykartaExcelReport(): Observable<Blob> {
    return this.http.get(`${this.url}/generate-excel-report/`, { responseType: 'blob' });
  }

  karykartaPdfReport(): Observable<Blob> {
    return this.http.get(`${this.url}/generate-pdf-report/`, { responseType: 'blob' });
  }

  surveyExcelReport(): Observable<Blob> {
    return this.http.get(`${this.url}/surevyexcelreport/`, { responseType: 'blob' });
  }
}
