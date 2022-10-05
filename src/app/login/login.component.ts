<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";
import { CompileShallowModuleMetadata } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthserviceService } from "../auth.service";
=======
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../auth.service';
>>>>>>> 4bd74d26a364e70b0250f8d8909a94a48c4fada3

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  title = "demo-trainee-web";
  submitted = false;
  show = false;
  formgroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.maxLength(8),
    ]),
    checkbox: new FormControl("", [Validators.required]),
  });
  responsedata: any;

  @ViewChild('showhideinput')
  input;
  constructor(private router: Router,
    private authservice: AuthserviceService,
    private http: HttpClient) { }

  ngOnInit() {
  }
  get uname() {
    return this.formgroup.get("username");
  }
  get pwrd() {
    return this.formgroup.get("password");
  }
  sumbit() {
    const request = {
      email: this.formgroup.controls["username"].value,
      password: this.formgroup.controls["password"].value,
    };
    if (this.formgroup.valid) {
      this.authservice.submit(request).subscribe(
        (result) => {
          if (result != null) {
            this.responsedata = result;
            localStorage.setItem("eml", this.formgroup.value["username"]);
            localStorage.setItem("password", this.formgroup.value["password"]);
            this.router.navigate(["/landing"]);
          }
        },
        (err) => console.log(err)
      );
    }
    if (this.formgroup.valid) {
      this.authservice.submit(request).subscribe(result => {
        if (result != null) {
          this.responsedata = result;
          localStorage.setItem('token', this.responsedata.jwtToken);
          this.router.navigate(['/landing']);
        }
      },
        err => console.log(err))

    }


  }
    //   this.http.post('https://api-demo-trainee-dev.cardinalityai.xyz/auth/login', request).subscribe(res => {

    // }
    // else {
    //   return;
    // }

    toggleShow() {
      this.show = !this.show;
      if (this.show) {
        this.input.nativeElement.type = 'text';
      } else {
        this.input.nativeElement.type = 'password';
      }
    }

    //   })
    //   this.submitted = true;

}



