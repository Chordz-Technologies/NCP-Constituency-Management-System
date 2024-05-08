import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Form_model } from 'model';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-survey-form',
  templateUrl: './edit-survey-form.component.html',
  styleUrls: ['./edit-survey-form.component.css']
})
export class EditSurveyFormComponent {
  surveyForm!: FormGroup;
  Form_model: Form_model = new Form_model();
  questionId!: number;

  showsubmit!: boolean;
  showupdate!: boolean;
  showdelete!: boolean;

  question_types: string[] = ['radio_button', 'checkbox', 'text'];

  constructor(private service: ServiceService, private fb: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      q_id: [''],
      question: [''],
      question_type: [''],
      options: [''],
    })
    // Get the ID of the product from the route parameters
    this.route.params.subscribe(val => {
      this.questionId = val['id']; // Assuming the parameter name is 'id'
      // Fetch the product details using the ID and populate the form
      this.service.getSurveyFormDataById(this.questionId).subscribe({
        next: (res) => {
          this.onedit(res.questions_details);
        }, error: (err) => {
          console.log(err)
        }
      });
      // return this.villageId;
    });

    this.surveyForm.reset()
    this.showsubmit = true;
    this.showupdate = false;
    this.showdelete = false;
  }

  onedit(question: Form_model) {
    this.showsubmit = false;
    this.showupdate = true;
    this.showdelete = true;
    this.surveyForm.setValue({
      q_id: question.q_id,
      question: question.question,
      question_type: question.question_type,
      options: question.options,
    })
  }

  updateQuestions() {
    const questionsData = {
      question: this.surveyForm.value.question,
      question_type: this.surveyForm.value.question_type,
      options: this.surveyForm.value.options,
    };

    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(questionsData)) {
      formData.append(key, value)
    }

    this.service.updateSurveyFormData(this.questionId, formData).subscribe(res => {
      this.toastr.success('Survey Form Updated Successfully!', 'Success');
      this.surveyForm.reset();
      this.router.navigate(['adminhome/surveyFormDetails'])
    })
  }
}
