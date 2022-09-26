import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  landingform: FormGroup
  // arrSave: Array<any>=[];
  text:any;
  userList: any;

  constructor(private http:HttpClient) { }
 

  ngOnInit() {
    this.landingform=new FormGroup({
      project:new FormControl(),
      dev:new FormControl(),
      status:new FormControl(),
      createdon:new FormControl(),
      createdby:new FormControl()
    });
    //this.arrSave=[{"project":"Cardinality" , "status":}]
    this.http.get('https://api-demo-trainee-dev.cardinalityai.xyz/project').subscribe(res=>{
      this.userList=res;
    })
  }
  
  save(){
    this.http.post('https://api-demo-trainee-dev.cardinalityai.xyz/project/create',{...this.landingform.value}).subscribe(res=>{
      if(res){
        console.log("Success")
      }
    })
    // this.arr_save && this.arr_save.push(this.landingform.value)
// this.text=this.landingform.value;
// this.arrSave && this.arrSave.push(this.text);
    
//     console.log("Success",this.arrSave);

  }

  
}
