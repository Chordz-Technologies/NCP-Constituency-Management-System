import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
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
  options = [
    { name: 'Level 1' , value: 'Level 1' },{ name: 'Level 2' , value: ' Level 2' },{ name: 'Level 3' , value: ' Level 3' },
    { name: 'Level 4' , value: ' Level 4 ' },{ name: 'Level 5' , value: ' Level 5' },{ name: 'Level 6' , value: ' Level 6' },
    { name: 'Level 7' , value: ' Level 7 ' },{ name: 'Level 8' , value: ' Level 8' },{ name: 'Level 9' , value: ' Level 9' },
    { name: 'Level 10' , value: ' Level 10 ' },{ name: 'Level 11' , value: ' Level 11' }
  ];
  constructor(private service: ServiceService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      selectedOptions: this.fb.array([]),
      message: [''],
    })
  }

  onCheckboxChange(event: any) {
    const selectedOptions = this.messageForm.controls['selectedOptions'] as FormArray;
    if (event.target.checked) {
      selectedOptions.push(this.fb.control(event.target.value));
    } else {
      const index = selectedOptions.controls.findIndex(x => x.value === event.target.value);
      selectedOptions.removeAt(index);
    }
  }

  postMessageFormData() {
    const messageFormData = {
      message_for: this.messageForm.value.selectedOptions,
      message: this.messageForm.value.message,
    }

    let postData = { ...messageFormData };

    // if (!postData.message_for || !postData.message) {
    //   this.toastr.error('Please fill all the fields.', 'Error');
    //   return;
    // }

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
