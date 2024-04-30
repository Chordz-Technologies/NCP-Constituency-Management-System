import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { villageData_model } from 'model';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Components/Service/service.service';

@Component({
  selector: 'app-edit-indapur-details',
  templateUrl: './edit-indapur-details.component.html',
  styleUrls: ['./edit-indapur-details.component.css']
})
export class EditIndapurDetailsComponent {

  villageForm!: FormGroup;
  villageData_model: villageData_model = new villageData_model();
  villageId!: number; // Variable to store the ID of the product to be edited

  showsubmit!: boolean;
  showupdate!: boolean;
  showdelete!: boolean;
  // productimageData: File | null | undefined;


  constructor(private service: ServiceService, private fb: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.villageForm = this.fb.group({
      id: [''],
      villagename: [''],
      reason: [''],
      votingpercentage: [''],

    })
    // Get the ID of the product from the route parameters
    this.route.params.subscribe(val => {
      this.villageId = val['id']; // Assuming the parameter name is 'id'
      // Fetch the product details using the ID and populate the form
      this.service.getIndapurDetailsById(this.villageId).subscribe({
        next: (res) => {
          this.onedit(res.village_data);
          console.log('villag Details:', res.village_data);
        }, error: (err) => {
          console.log(err)
        }
      });
      // return this.villageId;
    });

    this.villageForm.reset()
    this.showsubmit = true;
    this.showupdate = false;
    this.showdelete = false;
  }

  onedit(village: villageData_model) {
    this.showsubmit = false;
    this.showupdate = true;
    this.showdelete = true;
    this.villageForm.setValue({
      id: village.id,
      villagename: village.villagename,
      reason: village.reason,
      votingpercentage: village.votingpercentage,

      // villageImage: village.pimages
    })


  }



  updateVillage() {


    const villageData = {
      villagename: this.villageForm.value.villagename,
      reason: this.villageForm.value.reason,
      votingpercentage: this.villageForm.value.votingpercentage,

      // pimages : this.productimageData
      // ...(this.productimageData ? { pimages: this.productimageData } : {})
    };

    console.log("Before submitting the data is", villageData);
    // let formData2 = new FormData();
    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(villageData)) {
      console.log(key, value);

      formData.append(key, value)
    }

    this.service.updateIndapurById(this.villageId, formData).subscribe(res => {
      console.log(res.message);
      this.toastr.success('Village Updated successfully!', 'Success');
      this.villageForm.reset();
      this.router.navigate(['adminhome/indapur_village_data'])
    })

  }

}
