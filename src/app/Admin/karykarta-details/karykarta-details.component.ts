import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'environment';

@Component({
  selector: 'app-karykarta-details',
  templateUrl: './karykarta-details.component.html',
  styleUrls: ['./karykarta-details.component.css']
})
export class KarykartaDetailsComponent {
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
    this.http.get<any[]>(`${this.url}/allkquestions/`)
      .subscribe((questions: any) => {
        this.questions = questions.all_questions;
        this.http.get<any[]>(`${this.url}/allkresponses/`)
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

  // combineQuestionsAndResponses() {
  //   const groupedResponses: { [questionNumber: number]: string[] } = {};

  //   for (const response of this.responses) {
  //     for (let i = 1; i <= 12; i++) {
  //       const questionResponse = this.getResponseForQuestion(i, response);
  //       if (questionResponse) {
  //         if (!groupedResponses[i]) {
  //           groupedResponses[i] = [];
  //         }
  //         groupedResponses[i].push(questionResponse);
  //       }
  //     }
  //   }

  //   this.questionsAndResponses = this.questions.map((question, index) => ({
  //     question: question.question,
  //     responses: groupedResponses[index + 1] || []
  //   }));

  //   this.displayedColumns = ['question', ...Array.from({ length: Math.max(...this.questionsAndResponses.map(item => item.responses.length)) }, (_, i) => `response${i + 1}`)];
  //   this.displayedResponseColumns = this.displayedColumns.slice(1);

  //   this.dataSource.data = this.questionsAndResponses;
  //   this.dataSource.paginator = this.paginator;
  // }

  // getResponseForQuestion(questionNumber: number, response: any) {
  //   switch (questionNumber) {
  //     case 1:
  //       return response.q1_response || '';
  //     case 2:
  //       return response.q2_response || '';
  //     case 3:
  //       return response.q3_response || '';
  //     case 4:
  //       return response.q4_response || '';
  //     case 5:
  //       return response.q5_response || '';
  //     case 6:
  //       return response.q6_response || '';
  //     case 7:
  //       return response.q7_response || '';
  //     case 8:
  //       return response.q8_response || '';
  //     case 9:
  //       return response.q9_response || '';
  //     case 10:
  //       return response.q10_response || '';
  //     case 11:
  //       return response.q11_response || '';
  //     case 12:
  //       return response.q12_response || '';
  //     // ... (add cases for remaining questions)
  //     default:
  //       return '';
  //   }
  // }
}

// all_responses
// all_questions
// case 1:
//   return response.q1_response;  
// case 2:
//   return response.q2_response;
// case 3:
//   return response.q3_response;
// case 4:
//   return response.q4_response;
// case 5:
//   return response.q5_response;
// case 6:
//   return response.q6_response;
// case 7:
//   return response.q7_response;
// case 8:
//   return response.q8_response;
// case 9:
//   return response.q9_response;
// case 10:
//   return response.q10_response;
// case 11:
//   return response.q11_response;
// case 12:
//   return response.q12_response;

// questions: any[] = [];
// responses: any[] = [];
// questionsAndResponses: any[] = [];
// displayedColumns: string[] = ['id', 'question', 'response'];
// dataSource = new MatTableDataSource<any>();

// combineQuestionsAndResponses() {
//   this.questionsAndResponses = this.questions.map((question, index) => {
//     const responseForQuestion = this.responses.find(response => response.response_id === index + 1);
//     return {
//       id: index + 1,
//       question: question.question,
//       response: this.getResponseForQuestion(index + 1, responseForQuestion || {})
//     };
//   });
//   this.dataSource.data = this.questionsAndResponses;
//   this.dataSource.paginator = this.paginator;
// }

// getResponseForQuestion(questionNumber: number, response: any) {
//   switch (questionNumber) {
//     case 1:
//       return response.q1_response || 'No response available';
//     case 2:
//       return response.q2_response || 'No response available';
//     // Add more cases for the remaining questions
//     default:
//       return 'No response available';
//   }
// }