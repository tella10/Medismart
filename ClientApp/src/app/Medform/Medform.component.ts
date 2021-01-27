import { Component, OnInit } from '@angular/core';
import {MedformService} from "../Medform/Medform.service";
import {Medform} from "../Medform/Medform";
import {NgForm, FormGroup, FormControl,Validators } from '@angular/forms'
 
@Component({
  selector: 'app-Medform',
  templateUrl: './Medform.component.html',
  styleUrls: ['./Medform.component.css']
})
export class MedformComponent implements OnInit {
data : any;
ResForm: FormGroup;  
submitted = false;   
EventValue: any = "Reserve";

  constructor(private medformdata: MedformService) { 
  }

  ngOnInit() {

    this.getdata();
    this.ResForm = new FormGroup({  
      id: new FormControl(null),  
      accomodation : new FormControl(""),        
      alias: new FormControl(""),  
      firstName:new FormControl("",[Validators.maxLength(20)]),  
      lastName: new FormControl("",[Validators.maxLength(20)]),  
      guestOld: new FormControl(null, [Validators.min(0)]), 
      guestMiddle : new FormControl(null,[Validators.min(0)]), 
      guestChild: new FormControl(null,[Validators.min(0)]), 
      email: new FormControl("",[Validators.email]), 
      phone: new FormControl(null,[Validators.required]), 
      checkin: new FormControl(null), 
      checkOut: new FormControl(null), 
      equipmentType: new FormControl("",[Validators.required]), 
      slideOut: new FormControl(null), 
      requiredService: new FormControl("",[Validators.required]),
      pet: new FormControl(null), 
      comments: new FormControl("",[Validators.required]),  
    })   

//  this.getMedform();
//  this.PostMedform();
//  this.DeleteMedform();

  }


  getdata() {  
    this.medformdata.getData().subscribe((data: any[]) => {  
      this.data = data;  
    })  
  }  
  deleteData(id) {  
    this.medformdata.deleteData(id).subscribe((data: any[]) => {  
      this.data = data;  
      this.getdata();  
    })  
  }  
  Save() {   
    this.submitted = true;  
    
     if (this.ResForm.invalid) {  
            return;  
     }  
    this.medformdata.postData(this.ResForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  Update() {   
    this.submitted = true;  
    
    if (this.ResForm.invalid) {  
     return;  
    }        
    this.medformdata.putData(this.ResForm.value.id,this.ResForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditData(Data) {  
    this.ResForm.controls["id"].setValue(Data.id);  
    this.ResForm.controls["accomodation"].setValue(Data.accomodation);      
    this.ResForm.controls["alias"].setValue(Data.alias);  
    this.ResForm.controls["firstName"].setValue(Data.firstName);  
    this.ResForm.controls["lastName"].setValue(Data.lastName);  
    this.ResForm.controls["guestOld"].setValue(Data.guestOld);  
    this.ResForm.controls["guestMiddle"].setValue(Data.guestMiddle);  
    this.ResForm.controls["guestChild"].setValue(Data.guestChild);  
    this.ResForm.controls["email"].setValue(Data.email);  
    this.ResForm.controls["phone"].setValue(Data.phone);  
    this.ResForm.controls["checkin"].setValue(Data.checkin);  
    this.ResForm.controls["checkOut"].setValue(Data.checkOut);  
    this.ResForm.controls["equipmentType"].setValue(Data.equipmentType);  
    this.ResForm.controls["slideOut"].setValue(Data.slideOut);  
    this.ResForm.controls["requiredService"].setValue(Data.requiredService);  
    this.ResForm.controls["pet"].setValue(Data.pet);  
    this.ResForm.controls["comments"].setValue(Data.comments);  
    this.EventValue = "Update";  
  }  
  
  resetFrom()  
  {     
    this.getdata();  
    this.ResForm.reset();   
  } 



//   private medforms : Medform [];
//  //

//   PostMedform() {
//     this.data.addMedform(this.medforms)
//     .subscribe(medform => this.medforms.push(medform))
//   }
  
  // getMedform() {
  //   this.data.getMedform()
  //   .subscribe(() => this.medforms = this.data.medform);
  // }

  // DeleteMedform() {
  //   this.data.deleteMedform(this.medforms.id)
  //   .subscribe();
  // }
}
