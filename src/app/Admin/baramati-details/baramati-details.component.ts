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

  displayedColumns: string[] = ['action', 'id', 'villageName', 'votingPercentage', 'reason', 'causes', 'totalvoters', 'malevoters', 'femalevoters', 'othervoters', 'winner_votes', 'runnerup_votes', 'hindu', 'muslim', 'buddhist', 'rulingparty', 'total_booths'];
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
