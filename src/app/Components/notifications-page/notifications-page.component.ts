import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent {
  public dataLoaded: boolean = false;

  displayedColumns: string[] = ['Name', 'Birthdate', 'Contact'];
  dataSource!: MatTableDataSource<any>;
  dataSource1!: MatTableDataSource<any>;
  displayedColumns1: string[] = ['ID', 'Message For', 'Message'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  apiResponse: any;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getBirthdayList();
    this.getAdminMessage();
  }

  getBirthdayList() {
    this.service.karykartaBirthdays().subscribe({
      next: (res: any) => {
        this.dataLoaded = true;
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  getAdminMessage() {
    this.service.adminMessages().subscribe({
      next: (res: any) => {
        // this.apiResponse = res;
        this.dataLoaded = true;
        this.dataSource1 = new MatTableDataSource(res.all_messages);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  // getObjectValues(obj: any): any[] {
  //   return Object.values(obj);
  // }

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
}
