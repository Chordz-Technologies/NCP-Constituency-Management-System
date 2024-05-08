import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  response: any; // Variable to store API response
  currentLocationLink: string | undefined;
  selectedOptions: { [key: number]: string[] } = {}; // Define selectedOptions property

  constructor(private formBuilder: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({});
    this.getFormData();
  }

  getFormData() {
    this.service.getSurveyFormData().subscribe(response => {
      this.response = response;
      this.buildForm();
    });
  }

  buildForm() {
    if (this.response && this.response.all_questions) {
      this.response.all_questions.forEach((question: any) => {
        if (question.question_type === 'radio_button' || question.question_type === 'text' || question.question_type === 'checkbox') {
          const control = new FormControl();
          this.dynamicForm.addControl('q' + question.q_id, control);
        }
      });
    }
  }

  onSubmit() {
    const formData = this.transformFormData(this.dynamicForm.value);
    console.log(formData);

    // Send form data to backend
    this.service.submitSurveyFormData(formData).subscribe(response => {
      console.log('Form data sent to backend:', response);
    }, (error) => {
      console.error('Error sending form data to backend:', error);
    });
  }

  transformFormData(formData: any): any {
    const transformedFormData: any = {};
    Object.keys(formData).forEach(key => {
      const questionId = key.substring(1); // Extract the question ID
      if (Array.isArray(formData[key])) {
        // If it's an array (checkbox), join the values with comma separator
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

  saveLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLocationLink = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
      this.dynamicForm.get('q25')?.setValue(`https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`);
    }, (error) => {
      console.error('Error getting current position:', error);
    });
  }

  onCheckboxChange(questionId: number, option: string, event: Event): void {
    const target = event.target as HTMLInputElement; // Type assertion here
    if (target.checked) {
      // If the checkbox is checked, add the option to the selectedOptions object
      if (!this.selectedOptions[questionId]) {
        this.selectedOptions[questionId] = []; // Initialize an array to store selected options for this question
      }
      this.selectedOptions[questionId].push(option);
    } else {
      // If the checkbox is unchecked, remove the option from the selectedOptions object
      const index = this.selectedOptions[questionId].indexOf(option);
      if (index !== -1) {
        this.selectedOptions[questionId].splice(index, 1);
      }
    }
  }
}
