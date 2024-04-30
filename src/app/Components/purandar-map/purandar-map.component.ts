import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environment';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-purandar-map',
  templateUrl: './purandar-map.component.html',
  styleUrls: ['./purandar-map.component.css']
})
export class PurandarMapComponent {

  private url = environment.apiUrl;

  percentage: number = 0;
  pathColor: any[] = [];
  svgInfo: any[] = [];

  showModal: boolean = false;

  votingPercentages: number[] = [];
  villageData: any;
  regionData: any; // Variable to store region data
  isModalOpen = false; // Flag to track if modal is open or not

  constructor(private http: HttpClient, private modalService: NgbModal, private dataService: ServiceService) {


  }

  ngOnInit() {
    this.fetchSvgInfo();

  }

  fetchSvgInfo() {
    this.dataService.getAllDataP().subscribe(data => {
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
    this.http.get<any>(`${this.url}/purandarvillagedetails/${regionId}/`)
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

}
