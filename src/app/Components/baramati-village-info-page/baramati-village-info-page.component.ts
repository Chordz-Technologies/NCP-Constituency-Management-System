import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environment';
// import { Chart } from 'chart.js';
// import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-baramati-village-info-page',
  templateUrl: './baramati-village-info-page.component.html',
  styleUrls: ['./baramati-village-info-page.component.css']
})
export class BaramatiVillageInfoPageComponent implements OnInit {
  private url = environment.apiUrl;
  villageData: any;
  displayedColumns: string[] = ['property', 'value'];
  boothLeaderDataSource: MatTableDataSource<{ property: string, value: any }> = new MatTableDataSource();
  politicalLeaderDataSource: MatTableDataSource<{ property: string, value: any }>[] = [];
  opponentDataSource: MatTableDataSource<any>[] = [];
  neutralDataSource: MatTableDataSource<any>[] = [];
  surnameDataSource: MatTableDataSource<any>[] = [];
  barChart: any;



  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {

    this.fetchBaramatiVillagebyID();

  }

  fetchBaramatiVillagebyID() {
    const villageId = this.route.snapshot.paramMap.get('id');
    // Fetch village data from the API based on the villageId
    this.http.get<any>(`${this.url}/villagedetails/${villageId}/`)
      .subscribe((data: any) => {
        console.log("Baramati Data", data.village_data);
        this.villageData = data.village_data;
        this.populateDataSources();
        // this.createBarChart();
      }, error => {
        console.error('Error fetching village data:', error);
      });
  }

  populateDataSources() {
    const boothLeaderData = {
      'total_booths': this.villageData.total_booths,
      'boothleader_name': this.villageData.boothleader_name,
      'boothleader_no1': this.villageData.boothleader_no1,
      'boothleader_no2': this.villageData.boothleader_no2,
      'boothleader_address': this.villageData.boothleader_address
    };

    this.boothLeaderDataSource.data = Object.entries(boothLeaderData).map(([property, value]) => ({ property, value }));

    for (let i = 1; i <= 5; i++) {
      const politicalLeaderData = [
        {
          'property': `politicalleader_name${i}`,
          'value': this.villageData[`politicalleader_name${i}`],
        },
        // {
        //   'property': `politicalleader_party${i}`,
        //   'value': this.villageData[`politicalleader_party${i}`],
        // },
        {
          'property': `political_position${i}`,
          'value': this.villageData[`political_position${i}`],
        },
        {
          'property': `savidhanik_position${i}`,
          'value': this.villageData[`savidhanik_position${i}`],
        },
        {
          'property': `political_influence${i}`,
          'value': this.villageData[`political_influence${i}`],
        }
      ];

      this.politicalLeaderDataSource[i] = new MatTableDataSource(politicalLeaderData);
    }

    for (let i = 1; i <= 5; i++) {
      const opponentData = [
        {
          'property': `opponent_name${i}`,
          'value': this.villageData[`opponent_name${i}`],
        },
        {
          'property': `opponent_party${i}`,
          'value': this.villageData[`opponent_party${i}`],
        },
        {
          'property': `opponent_party_postion${i}`,
          'value': this.villageData[`opponent_party_postion${i}`],
        },
        {
          'property': `opponent_savidhanik_postion${i}`,
          'value': this.villageData[`opponent_savidhanik_postion${i}`],
        },
        {
          'property': `opponent_influence${i}`,
          'value': this.villageData[`opponent_influence${i}`],
        }
      ];

      this.opponentDataSource[i] = new MatTableDataSource(opponentData);
    }

    for (let i = 1; i <= 5; i++) {
      const neutralData = [
        {
          'property': `neutral_name${i}`,
          'value': this.villageData[`neutral_name${i}`],
        },
        {
          'property': `neutral_designation${i}`,
          'value': this.villageData[`neutral_designation${i}`],
        },
        {
          'property': `neutral_influence${i}`,
          'value': this.villageData[`neutral_influence${i}`],
        }
      ];

      this.neutralDataSource[i] = new MatTableDataSource(neutralData);
    }

    for (let i = 1; i <= 5; i++) {
      const surnameData = [
        {
          'property': `surname${i}`,
          'value': this.villageData[`surname${i}`],
        }
      ];

      this.surnameDataSource[i] = new MatTableDataSource(surnameData);
    }

  }


  // createBarChart(): void {
  //   if (!this.villageData) {
  //     console.error('Village data is null or undefined');
  //     return;
  //   }

  //   const religionData = [
  //     this.villageData.hindu || 0,
  //     this.villageData.muslim || 0,
  //     this.villageData.buddhist || 0
  //   ];

  //   const ctx = document.getElementById('barChart') as HTMLCanvasElement;
  //   if (!ctx) {
  //     console.error('Canvas element not found');
  //     return;
  //   }

  //   if (this.barChart) {
  //     this.barChart.destroy();
  //   }

  //   try {
  //     this.barChart = new Chart(ctx, {
  //       type: 'bar',
  //       data: {
  //         labels: ['Hindu', 'Muslim', 'Buddhist'],
  //         datasets: [{
  //           label: 'Religion-wise Voters',
  //           data: religionData,
  //           backgroundColor: [
  //             'rgba(255, 99, 132, 0.5)',
  //             'rgba(54, 162, 235, 0.5)',
  //             'rgba(255, 206, 86, 0.5)'
  //           ],
  //           borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)'
  //           ],
  //           borderWidth: 1
  //         }]
  //       },
  //       options: {
  //         indexAxis: 'y',
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         plugins: {
  //           title: {
  //             display: true,
  //             text: 'Religion-wise Voters'
  //           }
  //         }
  //       }
  //     });
  //   } catch (error) {
  //     console.error('Error creating bar chart:', error);
  //   }
  // }




  // createPieChart() {
  //   if (this.pieChart) {
  //     this.pieChart.destroy();
  //   }

  //   if (this.villageData) {
  //     const religionData = [
  //       this.villageData.hindu,
  //       this.villageData.muslim,
  //       this.villageData.buddhist
  //     ];

  //     const canvas = <HTMLCanvasElement>document.getElementById('pieChart');
  //     const ctx = canvas.getContext('2d');

  //     if (ctx) {
  //       this.pieChart = new Chart<'pie', number[], string>(ctx, {
  //         type: 'pie',
  //         data: {
  //           labels: ['Hindu', 'Muslim', 'Buddhist'],
  //           datasets: [{
  //             data: religionData,
  //             backgroundColor: [
  //               'rgba(255, 99, 132, 0.5)',
  //               'rgba(54, 162, 235, 0.5)',
  //               'rgba(255, 206, 86, 0.5)'
  //             ]
  //           }]
  //         },
  //         options: {
  //           responsive: true,
  //           maintainAspectRatio: false,
  //           plugins: {
  //             title: {
  //               display: true,
  //               text: 'Religion-wise Voters'
  //             }
  //           }
  //         }
  //       });
  //     }
  //   }
  // }

  // populateDataSources() {
  //   const boothLeaderData = {
  //     'total_booths': this.villageData.total_booths,
  //     'boothleader_name': this.villageData.boothleader_name,
  //     'boothleader_no1': this.villageData.boothleader_no1,
  //     'boothleader_no2': this.villageData.boothleader_no2,
  //     'boothleader_address': this.villageData.boothleader_address
  //   };

  //   const politicalLeaderData = [
  //     {
  //       'property': 'politicalleader_name',
  //       'value': this.villageData.politicalleader_name1,
  //     },
  //     {
  //       'property': 'politicalleader_party',
  //       'value': this.villageData.politicalleader_party1,
  //     },
  //     {
  //       'property': 'political_position',
  //       'value': this.villageData.political_position1,
  //     },
  //     {
  //       'property': 'savidhanik_position',
  //       'value': this.villageData.savidhanik_position1,
  //     },
  //     {
  //       'property': 'political_influence',
  //       'value': this.villageData.political_influence1,
  //     },
  //     {
  //       'property': 'politicalleader_name',
  //       'value': this.villageData.politicalleader_name2,
  //     },
  //     {
  //       'property': 'politicalleader_party',
  //       'value': this.villageData.politicalleader_party2,
  //     },
  //     {
  //       'property': 'political_position',
  //       'value': this.villageData.political_position2,
  //     },
  //     {
  //       'property': 'savidhanik_position',
  //       'value': this.villageData.savidhanik_position2,
  //     },
  //     {
  //       'property': 'political_influence',
  //       'value': this.villageData.political_influence2,
  //     },
  //     {
  //       'property': 'politicalleader_name',
  //       'value': this.villageData.politicalleader_name3,
  //     },
  //     {
  //       'property': 'politicalleader_party',
  //       'value': this.villageData.politicalleader_party3,
  //     },
  //     {
  //       'property': 'political_position',
  //       'value': this.villageData.political_position3,
  //     },
  //     {
  //       'property': 'savidhanik_position',
  //       'value': this.villageData.savidhanik_position3,
  //     },
  //     {
  //       'property': 'political_influence',
  //       'value': this.villageData.political_influence3,
  //     },
  //     {
  //       'property': 'politicalleader_name',
  //       'value': this.villageData.politicalleader_name4,
  //     },
  //     {
  //       'property': 'politicalleader_party',
  //       'value': this.villageData.politicalleader_party4,
  //     },
  //     {
  //       'property': 'political_position',
  //       'value': this.villageData.political_position4,
  //     },
  //     {
  //       'property': 'savidhanik_position',
  //       'value': this.villageData.savidhanik_position4,
  //     },
  //     {
  //       'property': 'political_influence',
  //       'value': this.villageData.political_influence4,
  //     },
  //     {
  //       'property': 'politicalleader_name',
  //       'value': this.villageData.politicalleader_name5,
  //     },
  //     {
  //       'property': 'politicalleader_party',
  //       'value': this.villageData.politicalleader_party5,
  //     },
  //     {
  //       'property': 'political_position',
  //       'value': this.villageData.political_position5,
  //     },
  //     {
  //       'property': 'savidhanik_position',
  //       'value': this.villageData.savidhanik_position5,
  //     },
  //     {
  //       'property': 'political_influence',
  //       'value': this.villageData.political_influence5,
  //     },
  //     // Repeat the same structure for other political leaders
  //   ];

  //   this.boothLeaderDataSource.data = Object.entries(boothLeaderData).map(([property, value]) => ({ property, value }));
  //   this.politicalLeaderDataSource.data = politicalLeaderData;
  // }


  formatPropertyName(property: string): string {
    // Remove hyphens and convert to normal text
    let formattedProperty = property.replace(/-|_/g, ' ');

    // Convert camelCase/PascalCase to normal text
    formattedProperty = formattedProperty.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Capitalize the first letter of each word
    formattedProperty = formattedProperty.replace(/\b\w/g, (c) => c.toUpperCase());

    return formattedProperty;
  }

}
