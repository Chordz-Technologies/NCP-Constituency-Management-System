import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Form_model } from 'model';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-karykarta-form',
  templateUrl: './edit-karykarta-form.component.html',
  styleUrls: ['./edit-karykarta-form.component.css']
})
export class EditKarykartaFormComponent {
  karykartaForm!: FormGroup;
  Form_model: Form_model = new Form_model();
  questionId!: number;

  showsubmit!: boolean;
  showupdate!: boolean;
  showdelete!: boolean;

  question_types: string[] = ['radio_button', 'text'];

  constructor(private service: ServiceService, private fb: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.karykartaForm = this.fb.group({
      q_id: [''],
      question: [''],
      question_type: [''],
      options: [''],
    })
    // Get the ID of the product from the route parameters
    this.route.params.subscribe(val => {
      this.questionId = val['id']; // Assuming the parameter name is 'id'
      // Fetch the product details using the ID and populate the form
      this.service.getKarykartaFormDataById(this.questionId).subscribe({
        next: (res) => {
          this.onedit(res.questions_details);
        }, error: (err) => {
          console.log(err)
        }
      });
      // return this.villageId;
    });

    this.karykartaForm.reset()
    this.showsubmit = true;
    this.showupdate = false;
    this.showdelete = false;
  }

  onedit(question: Form_model) {
    this.showsubmit = false;
    this.showupdate = true;
    this.showdelete = true;
    this.karykartaForm.setValue({
      q_id: question.q_id,
      question: question.question,
      question_type: question.question_type,
      options: question.options,
    })
  }

  updateQuestions() {
    const questionsData = {
      question: this.karykartaForm.value.question,
      question_type: this.karykartaForm.value.question_type,
      options: this.karykartaForm.value.options,
    };

    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(questionsData)) {
      formData.append(key, value)
    }

    this.service.updateKarykartaFormData(this.questionId, formData).subscribe(res => {
      this.toastr.success('Karykarta Form Updated Successfully!', 'Success');
      this.karykartaForm.reset();
      this.router.navigate(['adminhome/karykartaFormDetails'])
    })
  }
}
