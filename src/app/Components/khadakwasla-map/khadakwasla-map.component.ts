import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../../Service/service.service';
import { environment } from 'environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-khadakwasla-map',
  templateUrl: './khadakwasla-map.component.html',
  styleUrls: ['./khadakwasla-map.component.css']
})
export class KhadakwaslaMapComponent {

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
    this.dataService.getAllDataK().subscribe(data => {
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
    this.http.get<any>(`${this.url}/kvillagedetails/${regionId}/`)
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

  getVillageLogo(villageId: number): string {
    // Logic to determine the ruling party based on village ID
    const village = this.svgInfo.find(item => item.id === villageId);
    if (village) {
      const rulingParty = village.rulingparty;
      // Determine the image URL based on the ruling party
      if (rulingParty === 'Shivsena') {
        return '/assets/shivsenaLogo.png';
      } else if (rulingParty === 'Congress') {
        return '/assets/congressLogo.png';
      } else if (rulingParty === 'BJP') {
        return '/assets/bjpLogo.png';
      } else if (rulingParty === 'NCP') {
        return '/assets/ncpLogo.png';
      } else {
        return '/assets/default_logo.png'; // Default or placeholder image URL if needed
      }
    } else {
      return '/assets/default_logo.png'; // Default or placeholder image URL if village data is not found
    }
  }

  navigateToVillageDetails(modal: any) {
    if (this.villageData) {
      modal.dismiss('Cross click'); // Dismiss the modal
      this.router.navigate(['/khadakwasla_village_information', this.villageData.id]);
    }
  }
}
