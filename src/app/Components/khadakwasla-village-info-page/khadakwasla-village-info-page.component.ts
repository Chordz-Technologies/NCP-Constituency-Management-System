import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environment';

@Component({
  selector: 'app-khadakwasla-village-info-page',
  templateUrl: './khadakwasla-village-info-page.component.html',
  styleUrls: ['./khadakwasla-village-info-page.component.css']
})
export class KhadakwaslaVillageInfoPageComponent {
  private url = environment.apiUrl;

  villageData: any;
  displayedColumns: string[] = ['booth', 'information'];
  boothLeaderDataSource: MatTableDataSource<{ property: string, value: any }> = new MatTableDataSource();
  politicalLeaderDataSource: MatTableDataSource<{ property: string, value: any }>[] = [];
  opponentDataSource: MatTableDataSource<any>[] = [];
  neutralDataSource: MatTableDataSource<any>[] = [];
  surnameDataSource: MatTableDataSource<any>[] = [];
  barChart: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.fetchKhadkwaslaVillagebyID();

  }

  fetchKhadkwaslaVillagebyID() {
    const villageId = this.route.snapshot.paramMap.get('id');
    // Fetch village data from the API based on the villageId
    this.http.get<any>(`${this.url}/kvillagedetails/${villageId}/`)
      .subscribe(data => {
        console.log("Khadkwasla Data", data.village_data);
        this.villageData = data.village_data;
        this.populateDataSources();

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
