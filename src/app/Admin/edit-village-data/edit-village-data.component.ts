import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { villageData_model } from 'model';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Components/Service/service.service';

@Component({
  selector: 'app-edit-village-data',
  templateUrl: './edit-village-data.component.html',
  styleUrls: ['./edit-village-data.component.css']
})
export class EditVillageDataComponent {
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
      this.service.getVillageDetailsById(this.villageId).subscribe({
        next: (res) => {
          this.onedit(res.village_data);
          console.log('Product Details:', res.village_data);
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

  // postproducts() {
  //   const villageData = {
  //     pdescription: this.villageForm.value.pdescription,
  //     pname: this.villageForm.value.productsname,
  //     pcategory: this.villageForm.value.category,
  //     psubcategory: this.villageForm.value.subcategory,
  //     // pimages: this.productimageData,
  //   }

  //   // Check if any field is empty
  //   const isEmptyField = Object.values(villageData).some(value => !value);

  //   if (isEmptyField) {
  //     this.toastr.error('Please fill all fields', 'Error');
  //     return; // Stop further execution
  //   }

  //   let postData = { ...villageData };
  //   console.log(postData);

  //   console.log("Before submitting the data is", postData);

  //   const formData: FormData = new FormData();
  //   for (const [key, value] of Object.entries(postData)) {
  //     console.log(key, value);
  //     formData.append(key, value)
  //   }
  //   console.log("the data is", formData);

  //   this.service.ProductsPost(formData).subscribe((res) => {
  //     console.log(res)
  //     if (res.status === 'success') {
  //       this.toastr.success('successfully added', 'Success');
  //     } else {
  //       this.toastr.error('something went wrong', 'Error');
  //     }
  //   });

  //   // Reset the form after submitting
  //   this.villageForm.reset();
  //   this.router.navigate(['adminhome/admin_products']);
  // }


  // deleteVillage(): void {
  //   this.service.deleteVillageById(this.villageId).subscribe(
  //     () => {
  //       // console.log('Product deleted successfully');
  //       this.toastr.success('Product deleted successfully!', 'Success');
  //       // Redirect the user to a different page after successful deletion
  //       this.router.navigate(['adminhome/admin_products']);
  //     },
  //     error => {
  //       console.error('Error deleting product:', error);
  //     }
  //   );
  // }

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

    this.service.updateVillageById(this.villageId, formData).subscribe(res => {
      console.log(res.message);
      this.toastr.success('Village Updated successfully!', 'Success');
      this.villageForm.reset();
      this.router.navigate(['adminhome/baramati_village_data'])
    })

  }
  // for product image
  // onImageSelected(product: any) {

  //   const fileList: FileList = product.target.files;
  //   if (fileList.length > 0) {
  //     this.productimageData = fileList[0];
  //     console.log('Selected image:', this.productimageData);
  //   } else {
  //     this.productimageData = null; // Reset file if no file is selected
  //   }

  // }
}
