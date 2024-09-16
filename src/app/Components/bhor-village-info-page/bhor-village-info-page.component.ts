import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environment';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-village-info-page',
  templateUrl: './bhor-village-info-page.component.html',
  styleUrls: ['./bhor-village-info-page.component.css']
})
export class BhorVillageInfoPageComponent {
  private url = environment.apiUrl;
  boothLeaderDataSource = new MatTableDataSource<any>();
  displayedColumns = ['totalBooths', 'boothLeaderName', 'boothLeader1', 'boothLeader2', 'boothLeaderAddress'];

  politicalLeaderDataSource = new MatTableDataSource<any>();
  displayedColumns1 = ['politicalLeaderName', 'politicalPosition', 'savidhanikPosition', 'politicalInfluence', 'votingPercentage', 'ncpAP', 'ncpSP', 'bsp', 'apaksha'];

  opponentDataSource = new MatTableDataSource<any>();
  displayedColumns2 = ['opponentName', 'opponentParty', 'opponentPartyPosition', 'opponentSavidhanikPosition', 'opponentInfluence'];

  neutralDataSource = new MatTableDataSource<any>();
  displayedColumns3 = ['neutralName', 'neutralDesignation', 'neutralInfluence'];

  surnameDataSource = new MatTableDataSource<any>();
  displayedColumns4 = ['Surname'];

  villageData: any = null; 
  displayedColumns5: string[] = ['villagename', 'totalvoters', 'winner_votes', 'runnerup_votes', 'malevoters', 'femalevoters', 'othervoters', 'votingpercentage', 'reason', 'causes', 'boothleader_name', 'total_booths', 'rulingparty'];

  pieChart: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.fetchBhorVillagebyID();
  }

  fetchBhorVillagebyID() {
    const villageId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`${this.url}/bhorvillagedetails/${villageId}/`)
      .subscribe((data: any) => {
        this.villageData = data.village_data;
        this.populateDataSources();
        this.createPieChart();
      }, error => {
        console.error('Error fetching village data:', error);
      });
  }

  createPieChart() {
    if (this.pieChart) {
      this.pieChart.destroy();
    }

    if (this.villageData) {
      const religionData = [
        this.villageData.hindu,
        this.villageData.muslim,
        this.villageData.buddhist,
      ];

      const ctx = document.getElementById('myChart') as HTMLCanvasElement;

      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Hindu', 'Muslim', 'Buddhist'],
            datasets: [
              {
                data: religionData,
                backgroundColor: [
                  'rgb(255, 99, 21)',
                  'rgb(1, 178, 2)',
                  'rgb(1, 62, 255)',
                ],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Religion-wise Voters',
              },
            },
          },
        });
      }
    }
  }

  populateDataSources() {
    const boothLeaderData = [{
      'total_booths': this.villageData.total_booths,
      'boothleader_name': this.villageData.boothleader_name,
      'boothleader_no1': this.villageData.boothleader_no1,
      'boothleader_no2': this.villageData.boothleader_no2,
      'boothleader_address': this.villageData.boothleader_address
    }];
    this.boothLeaderDataSource.data = boothLeaderData;

    const politicalLeaderData = [];
    for (let i = 1; i <= 5; i++) {
      politicalLeaderData.push({
        'politicalleader_name': this.villageData[`politicalleader_name${i}`],
        'political_position': this.villageData[`political_position${i}`],
        'savidhanik_position': this.villageData[`savidhanik_position${i}`],
        'political_influence': this.villageData[`political_influence${i}`],
        'voting_percentage': this.villageData[`voting_percentage${i}`],
        'ncp_ap_': this.villageData[`ncp_ap_${i}`],
        'ncp_sp_': this.villageData[`ncp_sp_${i}`],
        'bsp': this.villageData[`bsp${i}`],
        'apaksha': this.villageData[`apaksha${i}`],
      });
    }
    this.politicalLeaderDataSource.data = politicalLeaderData;

    const opponentData = [];
    for (let i = 1; i <= 5; i++) {
      opponentData.push({
        'opponent_name': this.villageData[`opponent_name${i}`],
        'opponent_party': this.villageData[`opponent_party${i}`],
        'opponent_party_postion': this.villageData[`opponent_party_postion${i}`],
        'opponent_savidhanik_postion': this.villageData[`opponent_savidhanik_postion${i}`],
        'opponent_influence': this.villageData[`opponent_influence${i}`]
      });
    }
    this.opponentDataSource.data = opponentData;

    const neutralData = [];
    for (let i = 1; i <= 5; i++) {
      neutralData.push({
        'neutral_name': this.villageData[`neutral_name${i}`],
        'neutral_designation': this.villageData[`neutral_designation${i}`],
        'neutral_influence': this.villageData[`neutral_influence${i}`]
      });
    }
    this.neutralDataSource.data = neutralData;

    const surnameData = [];
    for (let i = 1; i <= 5; i++) {
      surnameData.push({
        'surname': this.villageData[`surname${i}`]
      });
    }
    this.surnameDataSource.data = surnameData;
  }
}
