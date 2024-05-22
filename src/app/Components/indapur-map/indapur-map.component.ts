import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environment';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indapur-map',
  templateUrl: './indapur-map.component.html',
  styleUrls: ['./indapur-map.component.css']
})
export class IndapurMapComponent {
  private url = environment.apiUrl;

  percentage: number = 0;
  pathColor: any[] = [];
  svgInfo: any[] = [];

  showModal: boolean = false;

  votingPercentages: number[] = [];
  villageData: any;
  regionData: any; // Variable to store region data
  isModalOpen = false; // Flag to track if modal is open or not

  constructor(private http: HttpClient, private modalService: NgbModal, private dataService: ServiceService, private router: Router) {}

  ngOnInit() {
    this.fetchSvgInfo();
  }

  fetchSvgInfo() {
    this.dataService.getAllDataI().subscribe(data => {
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
    this.http.get<any>(`${this.url}/indapurvillagedetails/${regionId}/`)
      .subscribe(data => {
        this.villageData = data.village_data;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
          (result) => {
            console.log(`Closed with: ${result}`);
          },
          (reason) => {
            console.log(`Dismissed: ${reason}`);
          }
        );
        (error: any) => {
          console.error('Error fetching village data:', error);
        }
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
      this.router.navigate(['/indapur_village_information', this.villageData.id]);
    }
  }
}
