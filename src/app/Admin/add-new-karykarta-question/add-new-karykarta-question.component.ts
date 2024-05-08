import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-new-karykarta-question',
  templateUrl: './add-new-karykarta-question.component.html',
  styleUrls: ['./add-new-karykarta-question.component.css']
})
export class AddNewKarykartaQuestionComponent {
  karykartaForm!: FormGroup;
  question_types: string[] = ['radio_button', 'text'];

  constructor(private service: ServiceService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.karykartaForm = this.fb.group({
      q_id: [''],
      question: [''],
      question_type: [''],
      options: [''],
    })
  }

  postSurveyFormData() {
    const karykartaFormData = {
      question: this.karykartaForm.value.question,
      question_type: this.karykartaForm.value.question_type,
      options: this.karykartaForm.value.options,
    }

    let postData = { ...karykartaFormData };

    if (!postData.question || !postData.question_type) {
      this.toastr.error('Please fill all the fields.', 'Error');
      return;
    }

    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(postData)) {
      formData.append(key, value);
    }
    this.service.postKarykartaFormData(formData).subscribe((res) => {
      this.toastr.success('New Question Added Successfully!', 'Success');
      this.karykartaForm.reset();
      this.router.navigate(['adminhome/karykartaFormDetails'])
    });
  }
}

