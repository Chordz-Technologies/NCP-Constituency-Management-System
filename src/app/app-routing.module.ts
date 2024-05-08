import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { BaramatiDetailsComponent } from './Admin/baramati-details/baramati-details.component';
import { EditBaramatiDetailsComponent } from './Admin/edit-baramati-details/edit-baramati-details.component';
import { AuthGuard } from './Service/auth.guard';
import { KhadakwaslaMapComponent } from './Components/khadakwasla-map/khadakwasla-map.component';
import { KhadakwaslaDetailsComponent } from './Admin/khadakwasla-details/khadakwasla-details.component';
import { Home2Component } from './Admin/home2/home2.component';
import { EditKhadakwaslaDetailsComponent } from './Admin/edit-khadakwasla-details/edit-khadakwasla-details.component';
import { DaundMapComponent } from './Components/daund-map/daund-map.component';
import { DaundDetailsComponent } from './Admin/daund-details/daund-details.component';
import { EditDaundDetailsComponent } from './Admin/edit-daund-details/edit-daund-details.component';
import { IndapurDetailsComponent } from './Admin/indapur-details/indapur-details.component';
import { EditIndapurDetailsComponent } from './Admin/edit-indapur-details/edit-indapur-details.component';
import { IndapurMapComponent } from './Components/indapur-map/indapur-map.component';
import { PurandarDetailsComponent } from './Admin/purandar-details/purandar-details.component';
import { EditPurandarDetailsComponent } from './Admin/edit-purandar-details/edit-purandar-details.component';
import { PurandarMapComponent } from './Components/purandar-map/purandar-map.component';
import { BhorMapComponent } from './Components/bhor-map/bhor-map.component';
import { BhorDetailsComponent } from './Admin/bhor-details/bhor-details.component';
import { EditBhorDetailsComponent } from './Admin/edit-bhor-details/edit-bhor-details.component';
import { BaramatiMapComponent } from './Components/baramati-map/baramati-map.component';
import { SurveyFormComponent } from './Components/survey-form/survey-form.component';
import { KarykartaFormComponent } from './Components/karykarta-form/karykarta-form.component';
import { BhorVillageInfoPageComponent } from './Components/bhor-village-info-page/bhor-village-info-page.component';
import { BaramatiVillageInfoPageComponent } from './Components/baramati-village-info-page/baramati-village-info-page.component';
import { PurandarVillageInfoPageComponent } from './Components/purandar-village-info-page/purandar-village-info-page.component';
import { KhadakwaslaVillageInfoPageComponent } from './Components/khadakwasla-village-info-page/khadakwasla-village-info-page.component';
import { IndapurVillageInfoPageComponent } from './Components/indapur-village-info-page/indapur-village-info-page.component';
import { DaundVillageInfoPageComponent } from './Components/daund-village-info-page/daund-village-info-page.component';
import { KarykartaDetailsComponent } from './Admin/karykarta-details/karykarta-details.component';
import { SurveyFormDetailsComponent } from './Admin/survey-form-details/survey-form-details.component';
import { EditSurveyFormComponent } from './Admin/edit-survey-form/edit-survey-form.component';
import { AddNewSurveyQuestionComponent } from './Admin/add-new-survey-question/add-new-survey-question.component';
import { NotificationsPageComponent } from './Components/notifications-page/notifications-page.component';
import { KarykartaFormDetailsComponent } from './Admin/karykarta-form-details/karykarta-form-details.component';
import { EditKarykartaFormComponent } from './Admin/edit-karykarta-form/edit-karykarta-form.component';
import { AddNewKarykartaQuestionComponent } from './Admin/add-new-karykarta-question/add-new-karykarta-question.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'baramatiMap', component: BaramatiMapComponent },
  { path: 'khadkwaslaMap', component: KhadakwaslaMapComponent },
  { path: 'daundMap', component: DaundMapComponent },
  { path: 'indapurMap', component: IndapurMapComponent },
  { path: 'purandarMap', component: PurandarMapComponent },
  { path: 'bhorMap', component: BhorMapComponent },
  { path: 'karykartaForm', component: KarykartaFormComponent },
  { path: 'surveyForm', component: SurveyFormComponent },
  { path: 'bhor_village_information/:id', component: BhorVillageInfoPageComponent },
  { path: 'baramati_village_information/:id', component: BaramatiVillageInfoPageComponent },
  { path: 'daund_village_information/:id', component: DaundVillageInfoPageComponent },
  { path: 'indapur_village_information/:id', component: IndapurVillageInfoPageComponent },
  { path: 'khadakwasla_village_information/:id', component: KhadakwaslaVillageInfoPageComponent },
  { path: 'purandar_village_information/:id', component: PurandarVillageInfoPageComponent },
  { path: 'notifications', component: NotificationsPageComponent },
  {
    path: 'adminhome', component: AdminhomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: Home2Component },
      { path: 'baramati_village_data', component: BaramatiDetailsComponent },
      { path: 'khadakwasla_village_data', component: KhadakwaslaDetailsComponent },
      { path: 'daund_village_data', component: DaundDetailsComponent },
      { path: 'indapur_village_data', component: IndapurDetailsComponent },
      { path: 'purandar_village_data', component: PurandarDetailsComponent },
      { path: 'bhor_village_data', component: BhorDetailsComponent },
      { path: 'edit_baramati_village_data/:id', component: EditBaramatiDetailsComponent },
      { path: 'edit_khadakwasla_village_data/:id', component: EditKhadakwaslaDetailsComponent },
      { path: 'edit_daund_village_data/:id', component: EditDaundDetailsComponent },
      { path: 'edit_indapur_village_data/:id', component: EditIndapurDetailsComponent },
      { path: 'edit_purandar_village_data/:id', component: EditPurandarDetailsComponent },
      { path: 'edit_bhor_village_data/:id', component: EditBhorDetailsComponent },
      { path: 'karykarta-details', component: KarykartaDetailsComponent },
      { path: 'surveyFormDetails', component: SurveyFormDetailsComponent },
      { path: 'edit_surveyForm/:id', component: EditSurveyFormComponent },
      { path: 'addNewSurveyQuestion', component: AddNewSurveyQuestionComponent },
      { path: 'karykartaFormDetails', component: KarykartaFormDetailsComponent },
      { path: 'edit_karykartaForm/:id', component: EditKarykartaFormComponent },
      { path: 'addNewKarykartaQuestion', component: AddNewKarykartaQuestionComponent },
    ]
  },
  { path: 'adminLogin', component: AdminloginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
