import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { villageData_model } from 'model';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-baramati-details',
  templateUrl: './edit-baramati-details.component.html',
  styleUrls: ['./edit-baramati-details.component.css']
})
export class EditBaramatiDetailsComponent {
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
      causes: [''],
      totalvoters: [''],
      malevoters: [''],
      femalevoters: [''],
      othervoters: [''],
      rulingparty: [''],
      total_booths: [''],
      boothleader_name: [''],
      boothleader_no1: [''],
      boothleader_no2: [''],
      boothleader_address: [''],
      politicalleader_name1: [''],
      politicalleader_party1: [''],
      political_position1: [''],
      savidhanik_position1: [''],
      political_influence1: [''],
      politicalleader_name2: [''],
      politicalleader_party2: [''],
      political_position2: [''],
      savidhanik_position2: [''],
      political_influence2: [''],
      politicalleader_name3: [''],
      politicalleader_party3: [''],
      political_position3: [''],
      savidhanik_position3: [''],
      political_influence3: [''],
      politicalleader_name4: [''],
      politicalleader_party4: [''],
      political_position4: [''],
      savidhanik_position4: [''],
      political_influence4: [''],
      politicalleader_name5: [''],
      politicalleader_party5: [''],
      political_position5: [''],
      savidhanik_position5: [''],
      political_influence5: [''],


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
      causes: village.causes,
      totalvoters: village.totalvoters,
      malevoters: village.malevoters,
      femalevoters: village.femalevoters,
      othervoters: village.othervoters,
      rulingparty: village.rulingparty,
      total_booths: village.total_booths,
      boothleader_name: village.boothleader_name,
      boothleader_no1: village.boothleader_no1,
      boothleader_no2: village.boothleader_no2,
      boothleader_address: village.boothleader_address,
      politicalleader_name1: village.politicalleader_name1,
      politicalleader_party1: village.politicalleader_party1,
      political_position1: village.political_position1,
      savidhanik_position1: village.savidhanik_position1,
      political_influence1: village.political_influence1,
      politicalleader_name2: village.politicalleader_name2,
      politicalleader_party2: village.politicalleader_party2,
      political_position2: village.political_position2,
      savidhanik_position2: village.savidhanik_position2,
      political_influence2: village.political_influence2,
      politicalleader_name3: village.politicalleader_name3,
      politicalleader_party3: village.politicalleader_party3,
      political_position3: village.political_position3,
      savidhanik_position3: village.savidhanik_position3,
      political_influence3: village.political_influence3,
      politicalleader_name4: village.politicalleader_name4,
      politicalleader_party4: village.politicalleader_party4,
      political_position4: village.political_position4,
      savidhanik_position4: village.savidhanik_position4,
      political_influence4: village.political_influence4,
      politicalleader_name5: village.politicalleader_name5,
      politicalleader_party5: village.politicalleader_party5,
      political_position5: village.political_position5,
      savidhanik_position5: village.savidhanik_position5,
      political_influence5: village.political_influence5,


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
      causes: this.villageForm.value.causes,
      totalvoters: this.villageForm.value.totalvoters,
      malevoters: this.villageForm.value.malevoters,
      femalevoters: this.villageForm.value.femalevoters,
      othervoters: this.villageForm.value.othervoters,
      rulingparty: this.villageForm.value.rulingparty,
      total_booths: this.villageForm.value.total_booths,
      boothleader_name: this.villageForm.value.boothleader_name,
      boothleader_no1: this.villageForm.value.boothleader_no1,
      boothleader_no2: this.villageForm.value.boothleader_no2,
      boothleader_address: this.villageForm.value.boothleader_address,
      politicalleader_name1: this.villageForm.value.politicalleader_name1,
      politicalleader_party1: this.villageForm.value.politicalleader_party1,
      political_position1: this.villageForm.value.political_position1,
      savidhanik_position1: this.villageForm.value.savidhanik_position1,
      political_influence1: this.villageForm.value.political_influence1,
      politicalleader_name2: this.villageForm.value.politicalleader_name2,
      politicalleader_party2: this.villageForm.value.politicalleader_party2,
      political_position2: this.villageForm.value.political_position2,
      savidhanik_position2: this.villageForm.value.savidhanik_position2,
      political_influence2: this.villageForm.value.political_influence2,
      politicalleader_name3: this.villageForm.value.politicalleader_name3,
      politicalleader_party3: this.villageForm.value.politicalleader_party3,
      political_position3: this.villageForm.value.political_position3,
      savidhanik_position3: this.villageForm.value.savidhanik_position3,
      political_influence3: this.villageForm.value.political_influence3,
      politicalleader_name4: this.villageForm.value.politicalleader_name4,
      politicalleader_party4: this.villageForm.value.politicalleader_party4,
      political_position4: this.villageForm.value.political_position4,
      savidhanik_position4: this.villageForm.value.savidhanik_position4,
      political_influence4: this.villageForm.value.political_influence4,
      politicalleader_name5: this.villageForm.value.politicalleader_name5,
      politicalleader_party5: this.villageForm.value.politicalleader_party5,
      political_position5: this.villageForm.value.political_position5,
      savidhanik_position5: this.villageForm.value.savidhanik_position5,
      political_influence5: this.villageForm.value.political_influence5,


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
