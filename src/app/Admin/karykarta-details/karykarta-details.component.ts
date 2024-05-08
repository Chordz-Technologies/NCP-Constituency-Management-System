import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-karykarta-details',
  templateUrl: './karykarta-details.component.html',
  styleUrls: ['./karykarta-details.component.css']
})
export class KarykartaDetailsComponent {
  questions: any[] = [];
  responses: any[] = [];
  questionsAndResponses: any[] = [];
  displayedColumns: string[] = ['id', 'question', 'response'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchQuestionsAndResponses();
  }

  fetchQuestionsAndResponses() {
    this.http.get<any[]>('https://baramatiapi.beatsacademy.in/allkquestions/')
      .subscribe((questions: any) => {
        this.questions = questions.all_questions;
        this.http.get<any[]>('https://baramatiapi.beatsacademy.in/allkresponses/')
          .subscribe((responses: any) => {
            this.responses = responses.all_responses;
            this.combineQuestionsAndResponses();
          });
      });
  }

  combineQuestionsAndResponses() {
    this.questionsAndResponses = this.questions.map((question, index) => ({
      id: index + 1, // Assuming the questions don't have an ID property
      question: question.question,
      response: this.getResponseForQuestion(index + 1, this.responses[0])
    }));
    this.dataSource.data = this.questionsAndResponses;
    this.dataSource.paginator = this.paginator;
  }

  getResponseForQuestion(questionNumber: number, response: any) {
    switch (questionNumber) {
      case 1:
        return response.q1_response;
      case 2:
        return response.q2_response;
      case 3:
        return response.q3_response;
      case 4:
        return response.q4_response;
      case 5:
        return response.q5_response;
      case 6:
        return response.q6_response;
      case 7:
        return response.q7_response;
      case 8:
        return response.q8_response;
      case 9:
        return response.q9_response;
      case 10:
        return response.q10_response;
      case 11:
        return response.q11_response;
      case 12:
        return response.q12_response;
      // Add more cases for the remaining questions
      default:
        return 'No response available';
    }
  }
}

