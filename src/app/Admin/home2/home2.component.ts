import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  isAdmin: boolean = localStorage.getItem('adminType') === 'Admin';
  isSuperAdmin: boolean = localStorage.getItem('adminType') === 'Superadmin';

  constructor(private service: ServiceService) { }

  downloadExcelFile() {
    this.service.karykartaExcelReport().subscribe({
      next: (res) => {
        // Check if the response is a valid blob
        if (res instanceof Blob) {
          const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          document.body.appendChild(a);
          a.style.display = 'none';
          a.href = url;
          // Specify the file name
          a.download = 'karykarta_report.xlsx';
          a.click();
          window.URL.revokeObjectURL(url);
        } else {
          // Handle the error: unexpected response format
          console.error('Unexpected response format');
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  downloadPdfFile() {
    this.service.karykartaPdfReport().subscribe((res) => {
      const blob = new Blob([res], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = url;
      a.download = 'karykarta_report.pdf'; // Specify the file name
      a.click();
      window.URL.revokeObjectURL(url);
    }, (error) => {
      console.error('Error downloading PDF:', error);
    });
  }
}
