import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-complaint-messages',
  templateUrl: './add-complaint-messages.component.html',
  styleUrls: ['./add-complaint-messages.component.css']
})
export class AddComplaintMessagesComponent {
  complaintForm!: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.complaintForm = this.fb.group({
      k_name: [''],
      k_area: [''],
      k_message: ['']
    })
  }

  postComplaintFormData() {
    const complaintFormData = {
      k_name: this.complaintForm.value.k_name,
      k_area: this.complaintForm.value.k_area,
      k_message: this.complaintForm.value.k_message,
    }

    let postData = { ...complaintFormData };

    if (!postData.k_name || !postData.k_area || !postData.k_message) {
      this.toastr.error('Please fill all the fields.', 'Error');
      return;
    }

    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(postData)) {
      formData.append(key, value);
    }
    this.service.postComplaintMessages(formData).subscribe((res) => {
      this.toastr.success('Message Added Successfully!', 'Success');
      this.complaintForm.reset();
    });
  }
}
