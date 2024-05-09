import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-superadmin-message',
  templateUrl: './add-superadmin-message.component.html',
  styleUrls: ['./add-superadmin-message.component.css']
})
export class AddSuperadminMessageComponent {
  messageForm!: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      message_for	: [''],
      message: [''],
    })
  }

  postMessageFormData() {
    const messageFormData = {
      message_for: this.messageForm.value.message_for,
      message: this.messageForm.value.message,
    }

    let postData = { ...messageFormData };

    if (!postData.message_for || !postData.message) {
      this.toastr.error('Please fill all the fields.', 'Error');
      return;
    }

    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(postData)) {
      formData.append(key, value);
    }
    this.service.postAdminMessages(formData).subscribe((res) => {
      this.toastr.success('New Message Added Successfully!', 'Success');
      this.messageForm.reset();
      // this.router.navigate(['adminhome/surveyFormDetails'])
    });
  }
}
