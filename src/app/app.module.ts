import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaramatiDetailsComponent } from './Admin/baramati-details/baramati-details.component';
import { EditBaramatiDetailsComponent } from './Admin/edit-baramati-details/edit-baramati-details.component';
import { ToastrModule } from 'ngx-toastr';
import { KhadakwaslaMapComponent } from './Components/khadakwasla-map/khadakwasla-map.component';
import { KhadakwaslaDetailsComponent } from './Admin/khadakwasla-details/khadakwasla-details.component';
import { EditKhadakwaslaDetailsComponent } from './Admin/edit-khadakwasla-details/edit-khadakwasla-details.component';
import { Home2Component } from './Admin/home2/home2.component';
import { DaundMapComponent } from './Components/daund-map/daund-map.component';
import { DaundDetailsComponent } from './Admin/daund-details/daund-details.component';
import { EditDaundDetailsComponent } from './Admin/edit-daund-details/edit-daund-details.component';
import { IndapurMapComponent } from './Components/indapur-map/indapur-map.component';
import { IndapurDetailsComponent } from './Admin/indapur-details/indapur-details.component';
import { EditIndapurDetailsComponent } from './Admin/edit-indapur-details/edit-indapur-details.component';
import { EditPurandarDetailsComponent } from './Admin/edit-purandar-details/edit-purandar-details.component';
import { PurandarDetailsComponent } from './Admin/purandar-details/purandar-details.component';
import { PurandarMapComponent } from './Components/purandar-map/purandar-map.component';
import { BhorMapComponent } from './Components/bhor-map/bhor-map.component';
import { BhorDetailsComponent } from './Admin/bhor-details/bhor-details.component';
import { EditBhorDetailsComponent } from './Admin/edit-bhor-details/edit-bhor-details.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BaramatiMapComponent } from './Components/baramati-map/baramati-map.component';
import { SurveyFormComponent } from './Components/survey-form/survey-form.component';
import { FooterComponent } from './Components/footer/footer.component';
import { KarykartaFormComponent } from './Components/karykarta-form/karykarta-form.component';
import { BhorVillageInfoPageComponent } from './Components/bhor-village-info-page/bhor-village-info-page.component';
import { BaramatiVillageInfoPageComponent } from './Components/baramati-village-info-page/baramati-village-info-page.component';
import { DaundVillageInfoPageComponent } from './Components/daund-village-info-page/daund-village-info-page.component';
import { IndapurVillageInfoPageComponent } from './Components/indapur-village-info-page/indapur-village-info-page.component';
import { KhadakwaslaVillageInfoPageComponent } from './Components/khadakwasla-village-info-page/khadakwasla-village-info-page.component';
import { PurandarVillageInfoPageComponent } from './Components/purandar-village-info-page/purandar-village-info-page.component';
import { KarykartaDetailsComponent } from './Admin/karykarta-details/karykarta-details.component';
import { SurveyFormDetailsComponent } from './Admin/survey-form-details/survey-form-details.component';
import { EditSurveyFormComponent } from './Admin/edit-survey-form/edit-survey-form.component';
import { AddNewSurveyQuestionComponent } from './Admin/add-new-survey-question/add-new-survey-question.component';
import { NotificationsPageComponent } from './Components/notifications-page/notifications-page.component';
import { KarykartaFormDetailsComponent } from './Admin/karykarta-form-details/karykarta-form-details.component';
import { EditKarykartaFormComponent } from './Admin/edit-karykarta-form/edit-karykarta-form.component';
import { AddNewKarykartaQuestionComponent } from './Admin/add-new-karykarta-question/add-new-karykarta-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminhomeComponent,
    SidebarComponent,
    AdminloginComponent,
    BaramatiDetailsComponent,
    EditBaramatiDetailsComponent,
    KhadakwaslaMapComponent,
    KhadakwaslaDetailsComponent,
    EditKhadakwaslaDetailsComponent,
    Home2Component,
    DaundMapComponent,
    DaundDetailsComponent,
    EditDaundDetailsComponent,
    IndapurMapComponent,
    IndapurDetailsComponent,
    EditIndapurDetailsComponent,
    EditPurandarDetailsComponent,
    PurandarDetailsComponent,
    PurandarMapComponent,
    BhorMapComponent,
    BhorDetailsComponent,
    EditBhorDetailsComponent,
    BaramatiMapComponent,
    SurveyFormComponent,
    FooterComponent,
    KarykartaFormComponent,
    BhorVillageInfoPageComponent,
    BaramatiVillageInfoPageComponent,
    DaundVillageInfoPageComponent,
    IndapurVillageInfoPageComponent,
    KhadakwaslaVillageInfoPageComponent,
    PurandarVillageInfoPageComponent,
    KarykartaDetailsComponent,
    SurveyFormDetailsComponent,
    EditSurveyFormComponent,
    AddNewSurveyQuestionComponent,
    NotificationsPageComponent,
    KarykartaFormDetailsComponent,
    EditKarykartaFormComponent,
    AddNewKarykartaQuestionComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgbCollapseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
