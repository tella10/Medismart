import { Component, OnInit } from '@angular/core';
import {MedformService} from "../Medform/Medform.service";
import {Medform} from "../Medform/Medform"
import {NgForm} from '@angular/forms'
 
@Component({
  selector: 'app-Medform',
  templateUrl: './Medform.component.html',
  styleUrls: ['./Medform.component.css']
})
export class MedformComponent implements OnInit {

  constructor(private data: MedformService) { 
  this.medforms = data.medform
  }

  ngOnInit() {
//  this.getMedform();
 this.PostMedform();
//  this.DeleteMedform();
  }


  private medforms : Medform [];
 //

  PostMedform() {
    this.data.adMedform(this.medforms)
    .subscribe(medform => this.medforms.push(medform))
  }


  // getMedform() {
  //   this.data.getMedform()
  //   .subscribe(() => this.medforms = this.data.medform);
  // }

  // DeleteMedform() {
  //   this.data.deleteMedform(this.medforms.id)
  //   .subscribe();
  // }
}
