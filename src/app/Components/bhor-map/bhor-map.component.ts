import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environment';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bhor-map',
  templateUrl: './bhor-map.component.html',
  styleUrls: ['./bhor-map.component.css']
})
export class BhorMapComponent {

  private url = environment.apiUrl;

  percentage: number = 0;
  pathColor: any[] = [];
  svgInfo: any[] = [];
  showModal: boolean = false;
  votingPercentages: number[] = [];
  villageData: any;
  villageDetails: any[] = [];
  displayedColumns: string[] = ['field', 'value'];
  regionData: any; // Variable to store region data
  isModalOpen = false; // Flag to track if modal is open or not

  constructor(private http: HttpClient, private modalService: NgbModal, private dataService: ServiceService, private router: Router) {}

  ngOnInit() {
    this.fetchSvgInfo();
  }

  fetchSvgInfo() {
    this.dataService.getAllDataB().subscribe(data => {
      console.log('Svg Info', data.all_data);
      this.svgInfo = data.all_data;
      // this.updateMapColors();
    });
  }

  getColor(villageId: number): any {
    const village = this.svgInfo.find(item => item.id === villageId);
    if (village) {
      const votingPercentage = village.votingpercentage;
      if (votingPercentage >= 0 && votingPercentage < 25) {
        // Dark red
        return 'red';
      } else if (votingPercentage >= 25 && votingPercentage < 50) {
        // Dark orange
        return 'orange';
      } else if (votingPercentage >= 50 && votingPercentage < 75) {
        // Dark yellow
        return 'yellow';
      } else {
        // Dark green
        return 'green';
      }
    }
  }

  openModal(regionId: number, content: any) {
    this.http.get<any>(`${this.url}/bhorvillagedetails/${regionId}/`)
      .subscribe(data => {
        this.villageData = data.village_data;

        // Populate the villageDetails array with field-value pairs
        this.villageDetails = [
          { field: 'Village Name', value: this.villageData.villagename },
          { field: 'Total Voters', value: this.villageData.totalvoters },
          { field: 'Male', value: this.villageData.malevoters },
          { field: 'Female', value: this.villageData.femalevoters },
          { field: 'Others', value: this.villageData.othervoters },
          { field: 'Voting Percentage', value: `${this.villageData.votingpercentage} %` },
          { field: 'Ruling Party', value: this.villageData.rulingparty },
          { field: 'Reason', value: this.villageData.reason },
          { field: 'Hindu Voters', value: this.villageData.hindu },
          { field: 'Muslim Voters', value: this.villageData.muslim },
          { field: 'Buddhist Voters', value: this.villageData.buddhist },
        ];

        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
          (result) => {
            console.log(`Closed with: ${result}`);
          },
          (reason) => {
            console.log(`Dismissed: ${reason}`);
          }
        );
      }, (error: any) => {
        console.error('Error fetching village data:', error);
      });
  }

  navigateToVillageDetails(modal: any) {
    if (this.villageData) {
      modal.dismiss('Cross click'); // Dismiss the modal
      this.router.navigate(['/bhor_village_information', this.villageData.id]);
    }
  }

}
