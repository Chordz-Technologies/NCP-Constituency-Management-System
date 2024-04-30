import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { VillageDetailsComponent } from './Admin/village-details/village-details.component';
import { EditVillageDataComponent } from './Admin/edit-village-data/edit-village-data.component';
import { AuthGuard } from './Components/Guard/auth.guard';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'baramatiMap', component: BaramatiMapComponent },
  { path: 'khadkwaslaMap', component: KhadakwaslaMapComponent },
  { path: 'daundMap', component: DaundMapComponent },
  { path: 'indapurMap', component: IndapurMapComponent },
  { path: 'purandarMap', component: PurandarMapComponent },
  { path: 'bhorMap', component: BhorMapComponent },
  {
    path: 'adminhome', component: AdminhomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: Home2Component },
      { path: 'baramati_village_data', component: VillageDetailsComponent },
      { path: 'khadakwasla_village_data', component: KhadakwaslaDetailsComponent },
      { path: 'duand_village_data', component: DaundDetailsComponent },
      { path: 'indapur_village_data', component: IndapurDetailsComponent },
      { path: 'purandar_village_data', component: PurandarDetailsComponent },
      { path: 'bhor_village_data', component: BhorDetailsComponent },
      { path: 'edit_baramati_village_data/:id', component: EditVillageDataComponent },
      { path: 'edit_khadakwasla_village_data/:id', component: EditKhadakwaslaDetailsComponent },
      { path: 'edit_duand_village_data/:id', component: EditDaundDetailsComponent },
      { path: 'edit_indapur_village_data/:id', component: EditIndapurDetailsComponent },
      { path: 'edit_purandar_village_data/:id', component: EditPurandarDetailsComponent },
      { path: 'edit_bhor_village_data/:id', component: EditBhorDetailsComponent },
    ]
  },
  { path: 'adminLogin', component: AdminloginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
