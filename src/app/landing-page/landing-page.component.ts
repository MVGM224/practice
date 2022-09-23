import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  landingform: FormGroup
  arrSave: Array<any>=[];
  text:any;

  constructor() { }
 

  ngOnInit() {
    this.landingform=new FormGroup({
      project:new FormControl(),
      dev:new FormControl(),
      status:new FormControl(),
      createdon:new FormControl(),
      createdby:new FormControl()
    });
    //this.arrSave=[{"project":"Cardinality" , "status":}]
  }
  
  save(){
    // this.arr_save && this.arr_save.push(this.landingform.value)
this.text=this.landingform.value;
this.arrSave && this.arrSave.push(this.text);
    
    console.log("Success",this.arrSave);

  }

  
}
