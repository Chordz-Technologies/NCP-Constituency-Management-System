import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { villageData_model } from 'model';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-khadakwasla-details',
  templateUrl: './edit-khadakwasla-details.component.html',
  styleUrls: ['./edit-khadakwasla-details.component.css']
})
export class EditKhadakwaslaDetailsComponent {
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
      political_position1: [''],
      savidhanik_position1: [''],
      political_influence1: [''],
      politicalleader_name2: [''],
      political_position2: [''],
      savidhanik_position2: [''],
      political_influence2: [''],
      politicalleader_name3: [''],
      political_position3: [''],
      savidhanik_position3: [''],
      political_influence3: [''],
      politicalleader_name4: [''],
      political_position4: [''],
      savidhanik_position4: [''],
      political_influence4: [''],
      politicalleader_name5: [''],
      political_position5: [''],
      savidhanik_position5: [''],
      political_influence5: [''],
      village_specs: [''],
      winner_votes: [''],
      runnerup_votes: [''],
      hindu: [''],
      muslim: [''],
      buddhist: [''],
      opponent_name1: [''],
      opponent_party1: [''],
      opponent_party_postion1: [''],
      opponent_savidhanik_postion1: [''],
      opponent_influence1: [''],
      opponent_name2: [''],
      opponent_party2: [''],
      opponent_party_postion2: [''],
      opponent_savidhanik_postion2: [''],
      opponent_influence2: [''],
      opponent_name3: [''],
      opponent_party3: [''],
      opponent_party_postion3: [''],
      opponent_savidhanik_postion3: [''],
      opponent_influence3: [''],
      opponent_name4: [''],
      opponent_party4: [''],
      opponent_party_postion4: [''],
      opponent_savidhanik_postion4: [''],
      opponent_influence4: [''],
      opponent_name5: [''],
      opponent_party5: [''],
      opponent_party_postion5: [''],
      opponent_savidhanik_postion5: [''],
      opponent_influence5: [''],
      neutral_name1: [''],
      neutral_designation1: [''],
      neutral_influence1: [''],
      neutral_name2: [''],
      neutral_designation2: [''],
      neutral_influence2: [''],
      neutral_name3: [''],
      neutral_designation3: [''],
      neutral_influence3: [''],
      neutral_name4: [''],
      neutral_designation4: [''],
      neutral_influence4: [''],
      neutral_name5: [''],
      neutral_designation5: [''],
      neutral_influence5: [''],
      surname1: [''],
      surname2: [''],
      surname3: [''],
      surname4: [''],
      surname5: [''],

    })
    // Get the ID of the product from the route parameters
    this.route.params.subscribe(val => {
      this.villageId = val['id']; // Assuming the parameter name is 'id'
      // Fetch the product details using the ID and populate the form
      this.service.getKhadakwaslaDetailsById(this.villageId).subscribe({
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
      political_position1: village.political_position1,
      savidhanik_position1: village.savidhanik_position1,
      political_influence1: village.political_influence1,
      politicalleader_name2: village.politicalleader_name2,
      political_position2: village.political_position2,
      savidhanik_position2: village.savidhanik_position2,
      political_influence2: village.political_influence2,
      politicalleader_name3: village.politicalleader_name3,
      political_position3: village.political_position3,
      savidhanik_position3: village.savidhanik_position3,
      political_influence3: village.political_influence3,
      politicalleader_name4: village.politicalleader_name4,
      political_position4: village.political_position4,
      savidhanik_position4: village.savidhanik_position4,
      political_influence4: village.political_influence4,
      politicalleader_name5: village.politicalleader_name5,
      political_position5: village.political_position5,
      savidhanik_position5: village.savidhanik_position5,
      political_influence5: village.political_influence5,
      village_specs: village.village_specs,
      winner_votes: village.winner_votes,
      runnerup_votes: village.runnerup_votes,
      hindu: village.hindu,
      muslim: village.muslim,
      buddhist: village.buddhist,
      opponent_name1: village.opponent_name1,
      opponent_party1: village.opponent_party1,
      opponent_party_postion1: village.opponent_party_postion1,
      opponent_savidhanik_postion1: village.opponent_savidhanik_postion1,
      opponent_influence1: village.opponent_influence1,
      opponent_name2: village.opponent_name2,
      opponent_party2: village.opponent_party2,
      opponent_party_postion2: village.opponent_party_postion2,
      opponent_savidhanik_postion2: village.opponent_savidhanik_postion2,
      opponent_influence2: village.opponent_influence2,
      opponent_name3: village.opponent_name3,
      opponent_party3: village.opponent_party3,
      opponent_party_postion3: village.opponent_party_postion3,
      opponent_savidhanik_postion3: village.opponent_savidhanik_postion3,
      opponent_influence3: village.opponent_influence3,
      opponent_name4: village.opponent_name4,
      opponent_party4: village.opponent_party4,
      opponent_party_postion4: village.opponent_party_postion4,
      opponent_savidhanik_postion4: village.opponent_savidhanik_postion4,
      opponent_influence4: village.opponent_influence4,
      opponent_name5: village.opponent_name5,
      opponent_party5: village.opponent_party5,
      opponent_party_postion5: village.opponent_party_postion5,
      opponent_savidhanik_postion5: village.opponent_savidhanik_postion5,
      opponent_influence5: village.opponent_influence5,
      neutral_name1: village.neutral_name1,
      neutral_designation1: village.neutral_designation1,
      neutral_influence1: village.neutral_influence1,
      neutral_name2: village.neutral_name2,
      neutral_designation2: village.neutral_designation2,
      neutral_influence2: village.neutral_influence2,
      neutral_name3: village.neutral_name3,
      neutral_designation3: village.neutral_designation3,
      neutral_influence3: village.neutral_influence3,
      neutral_name4: village.neutral_name4,
      neutral_designation4: village.neutral_designation4,
      neutral_influence4: village.neutral_influence4,
      neutral_name5: village.neutral_name5,
      neutral_designation5: village.neutral_designation5,
      neutral_influence5: village.neutral_influence5,
      surname1: village.surname1,
      surname2: village.surname2,
      surname3: village.surname3,
      surname4: village.surname4,
      surname5: village.surname5,
      // villageImage: village.pimages
    })


  }

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
      political_position1: this.villageForm.value.political_position1,
      savidhanik_position1: this.villageForm.value.savidhanik_position1,
      political_influence1: this.villageForm.value.political_influence1,
      politicalleader_name2: this.villageForm.value.politicalleader_name2,
      political_position2: this.villageForm.value.political_position2,
      savidhanik_position2: this.villageForm.value.savidhanik_position2,
      political_influence2: this.villageForm.value.political_influence2,
      politicalleader_name3: this.villageForm.value.politicalleader_name3,
      political_position3: this.villageForm.value.political_position3,
      savidhanik_position3: this.villageForm.value.savidhanik_position3,
      political_influence3: this.villageForm.value.political_influence3,
      politicalleader_name4: this.villageForm.value.politicalleader_name4,
      political_position4: this.villageForm.value.political_position4,
      savidhanik_position4: this.villageForm.value.savidhanik_position4,
      political_influence4: this.villageForm.value.political_influence4,
      politicalleader_name5: this.villageForm.value.politicalleader_name5,
      political_position5: this.villageForm.value.political_position5,
      savidhanik_position5: this.villageForm.value.savidhanik_position5,
      political_influence5: this.villageForm.value.political_influence5,
      village_specs: this.villageForm.value.village_specs,
      winner_votes: this.villageForm.value.winner_votes,
      runnerup_votes: this.villageForm.value.runnerup_votes,
      hindu: this.villageForm.value.hindu,
      muslim: this.villageForm.value.muslim,
      buddhist: this.villageForm.value.buddhist,
      opponent_name1: this.villageForm.value.opponent_name1,
      opponent_party1: this.villageForm.value.opponent_party1,
      opponent_party_postion1: this.villageForm.value.opponent_party_postion1,
      opponent_savidhanik_postion1: this.villageForm.value.opponent_savidhanik_postion1,
      opponent_influence1: this.villageForm.value.opponent_influence1,
      opponent_name2: this.villageForm.value.opponent_name2,
      opponent_party2: this.villageForm.value.opponent_party2,
      opponent_party_postion2: this.villageForm.value.opponent_party_postion2,
      opponent_savidhanik_postion2: this.villageForm.value.opponent_savidhanik_postion2,
      opponent_influence2: this.villageForm.value.opponent_influence2,
      opponent_name3: this.villageForm.value.opponent_name3,
      opponent_party3: this.villageForm.value.opponent_party3,
      opponent_party_postion3: this.villageForm.value.opponent_party_postion3,
      opponent_savidhanik_postion3: this.villageForm.value.opponent_savidhanik_postion3,
      opponent_influence3: this.villageForm.value.opponent_influence3,
      opponent_name4: this.villageForm.value.opponent_name4,
      opponent_party4: this.villageForm.value.opponent_party4,
      opponent_party_postion4: this.villageForm.value.opponent_party_postion4,
      opponent_savidhanik_postion4: this.villageForm.value.opponent_savidhanik_postion4,
      opponent_influence4: this.villageForm.value.opponent_influence4,
      opponent_name5: this.villageForm.value.opponent_name5,
      opponent_party5: this.villageForm.value.opponent_party5,
      opponent_party_postion5: this.villageForm.value.opponent_party_postion5,
      opponent_savidhanik_postion5: this.villageForm.value.opponent_savidhanik_postion5,
      opponent_influence5: this.villageForm.value.opponent_influence5,
      neutral_name1: this.villageForm.value.neutral_name1,
      neutral_designation1: this.villageForm.value.neutral_designation1,
      neutral_influence1: this.villageForm.value.neutral_influence1,
      neutral_name2: this.villageForm.value.neutral_name2,
      neutral_designation2: this.villageForm.value.neutral_designation2,
      neutral_influence2: this.villageForm.value.neutral_influence2,
      neutral_name3: this.villageForm.value.neutral_name3,
      neutral_designation3: this.villageForm.value.neutral_designation3,
      neutral_influence3: this.villageForm.value.neutral_influence3,
      neutral_name4: this.villageForm.value.neutral_name4,
      neutral_designation4: this.villageForm.value.neutral_designation4,
      neutral_influence4: this.villageForm.value.neutral_influence4,
      neutral_name5: this.villageForm.value.neutral_name5,
      neutral_designation5: this.villageForm.value.neutral_designation5,
      neutral_influence5: this.villageForm.value.neutral_influence5,
      surname1: this.villageForm.value.surname1,
      surname2: this.villageForm.value.surname2,
      surname3: this.villageForm.value.surname3,
      surname4: this.villageForm.value.surname4,
      surname5: this.villageForm.value.surname5,
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

    this.service.updateKhadakwaslaById(this.villageId, formData).subscribe(res => {
      console.log(res.message);
      this.toastr.success('Village Updated successfully!', 'Success');
      this.villageForm.reset();
      this.router.navigate(['adminhome/khadakwasla_village_data'])
    })

  }
}
