import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../auth.service';

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
  login() {
    const request = {
      email: this.formgroup.controls["username"].value,
      password: this.formgroup.controls["password"].value,
    };
    if (this.formgroup.valid) {
      this.authservice.submit(request).subscribe(
        (result) => {
          if (result != null) {
            this.responsedata = result;
            localStorage.setItem("email", this.formgroup.value["username"]);
            localStorage.setItem("password", this.formgroup.value["password"]);
            this.router.navigate(["/landing"]);
          }
        },
        (err) => console.log(err)
      );
    }
  }

    toggleShow() {
      this.show = !this.show;
      if (this.show) {
        this.input.nativeElement.type = 'text';
      } else {
        this.input.nativeElement.type = 'password';
      }
    }

}



