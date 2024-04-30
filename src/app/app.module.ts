import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
import { VillageDetailsComponent } from './Admin/village-details/village-details.component';
import { EditVillageDataComponent } from './Admin/edit-village-data/edit-village-data.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminhomeComponent,
    SidebarComponent,
    AdminloginComponent,
    VillageDetailsComponent,
    EditVillageDataComponent,
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
