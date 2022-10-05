import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  landingform: FormGroup;
  // arrSave: Array<any>=[];
  text:any;
  userList: any;

  constructor(private http:HttpClient,
    private Router: Router) { }

  ngOnInit() {
    this.landingform = new FormGroup({
      project: new FormControl(),
      team: new FormControl(),
      status: new FormControl(),
      createdOn: new FormControl(),
      createdBy: new FormControl(),
    });
    //this.arrSave=[{"project":"Cardinality" , "status":}]
    this.http
      .get("https://api-demo-trainee-dev.cardinalityai.xyz/project")
      .subscribe((res) => {
        this.userList = res;
      });
  }

  save() {

    this.http.post("https://api-demo-trainee-dev.cardinalityai.xyz/project/create",
     {...this.landingform.value,  })
      .subscribe((res) => {
        if (res) {
          console.log("Success");
          this.http.get("https://api-demo-trainee-dev.cardinalityai.xyz/project")
          .subscribe((res) => {
          this.userList = res;
      });
          this.landingform.reset();
          document.getElementById('cancelbutton').click();
        }
      });

  }
  logout(){
    localStorage.clear();
    this.Router.navigate([""]);
  }
}
