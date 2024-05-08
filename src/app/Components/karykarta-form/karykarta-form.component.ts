import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-karykarta-form',
  templateUrl: './karykarta-form.component.html',
  styleUrls: ['./karykarta-form.component.css']
})
export class KarykartaFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  response: any; // Variable to store API response

  constructor(private formBuilder: FormBuilder, private service: ServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({});
    this.getFormData();
  }

  getFormData() {
    this.service.getKarykartaFormData().subscribe(response => {
      this.response = response;
      this.buildForm();
    });
  }

  buildForm() {
    if (this.response && this.response.all_questions) {
      this.response.all_questions.forEach((question: any) => {
        if (question.question_type === 'radio_button' || question.question_type === 'text') {
          const control = new FormControl('', Validators.required); // Add Validators.required to make the field compulsory
          this.dynamicForm.addControl('q' + question.q_id, control);
        }
      });
    }
  }

  onSubmit() {
    if (this.dynamicForm.invalid) {
      this.toastr.error('Please fill all the required fields.', 'Error');
      return;
    }

    const formData = this.transformFormData(this.dynamicForm.value);
    this.service.postKarykartaFormData(formData).subscribe(response => {
      this.toastr.success('Karykarta Added Successfully!', 'Success');
      this.dynamicForm.reset();
    }, (error) => {
      console.error('Error sending form data to backend:', error);
    });
  }

  transformFormData(formData: any): any {
    const transformedFormData: any = {};
    Object.keys(formData).forEach(key => {
      const questionId = key.substring(1); // Extract the question ID
      if (Array.isArray(formData[key])) {
        transformedFormData['q' + questionId + '_response'] = formData[key].join(',');
      } else {
        transformedFormData['q' + questionId + '_response'] = formData[key];
      }
    });
    return transformedFormData;
  }

  onRadioChange(questionId: number, option: any) {
    this.dynamicForm.get('q' + questionId)?.setValue(option);
  }
}
