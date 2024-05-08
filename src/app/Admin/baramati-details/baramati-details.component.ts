import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-baramati-details',
  templateUrl: './baramati-details.component.html',
  styleUrls: ['./baramati-details.component.css']
})
export class BaramatiDetailsComponent {

  public dataLoaded: boolean = false;


  displayedColumns: string[] = ['action', 'id', 'villageName', 'votingPercentage', 'reason', 'causes', 'totalvoters', 'malevoters', 'femalevoters', 'othervoters', 'village_specs', 'winner_votes', 'runnerup_votes', 'hindu', 'muslim', 'buddhist', 'rulingparty', 'total_booths', 'boothleader_name', 'boothleader_no1', 'boothleader_no2', 'boothleader_address', 'politicalleader_name1', 'political_position1', 'savidhanik_position1', 'political_influence1', 'politicalleader_name2', 'political_position2', 'savidhanik_position2', 'political_influence2', 'politicalleader_name3', 'political_position3', 'savidhanik_position3', 'political_influence3', 'politicalleader_name4', 'political_position4', 'savidhanik_position4', 'political_influence4', 'politicalleader_name5', 'political_position5', 'savidhanik_position5', 'political_influence5'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  village: any;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getVillageList();
  }

  getVillageList() {
    this.service.getVillageDetails().subscribe({
      next: (res: any) => {
        this.dataLoaded = true;
        this.village = res.all_data;
        this.dataSource = new MatTableDataSource(this.village);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        alert(err);
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onChange(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(id: number) {
    this.router.navigate(['adminhome/edit_baramati_village_data/', id]);
  }


}
