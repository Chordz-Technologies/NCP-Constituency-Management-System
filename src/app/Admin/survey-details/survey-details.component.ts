import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'environment';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent {
  private url = environment.apiUrl;

  questions: any[] = [];
  responses: any[] = [];
  questionsAndResponses: any[] = [];
  displayedColumns: string[] = ['question'];
  displayedResponseColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchQuestionsAndResponses();
  }

  fetchQuestionsAndResponses() {
    this.http.get<any[]>(`${this.url}/allquestions/`)
      .subscribe((questions: any) => {
        this.questions = questions.all_questions;
        this.http.get<any[]>(`${this.url}/allresponses/`)
          .subscribe((responses: any) => {
            this.responses = responses.all_responses;
            // this.combineQuestionsAndResponses();
            this.updateTableColumnsAndData();
          });
      });
  }

  updateTableColumnsAndData() {
    // Update table headers
    this.displayedColumns = ['response_id', ...this.questions.map(question => question.question)];
  
    // Update table data
    this.dataSource = new MatTableDataSource<any>(this.responses.map(response => {
      const rowData: any = { response_id: response.response_id };
      this.questions.forEach(question => {
        rowData[question.question] = response[`q${question.q_id}_response`] || 'No response available';
      });
      return rowData;
    }));
  
    this.dataSource.paginator = this.paginator;
  }

  isLongTextQuestion(column: string): boolean {
    const question = this.questions.find(q => q.question === column);
    return question && question.question_type === 'text';
  }
}
