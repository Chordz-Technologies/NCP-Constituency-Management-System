import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-new-survey-question',
  templateUrl: './add-new-survey-question.component.html',
  styleUrls: ['./add-new-survey-question.component.css']
})
export class AddNewSurveyQuestionComponent {
  surveyForm!: FormGroup;
  question_types: string[] = ['radio_button', 'checkbox', 'text'];

  constructor(private service: ServiceService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      q_id: [''],
      question: [''],
      question_type: [''],
      options: [''],
    })
  }

  postSurveyFormData() {
    const surveyFormData = {
      question: this.surveyForm.value.question,
      question_type: this.surveyForm.value.question_type,
      options: this.surveyForm.value.options,
    }

    let postData = { ...surveyFormData };

    if (!postData.question || !postData.question_type) {
      this.toastr.error('Please fill all the fields.', 'Error');
      return;
    }

    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(postData)) {
      formData.append(key, value);
    }
    this.service.postSurveyFormData(formData).subscribe((res) => {
      this.toastr.success('New Question Added Successfully!', 'Success');
      this.surveyForm.reset();
      this.router.navigate(['adminhome/surveyFormDetails'])
    });
  }
}
