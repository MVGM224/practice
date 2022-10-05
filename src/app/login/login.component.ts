import { HttpClient } from "@angular/common/http";
import { CompileShallowModuleMetadata } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthserviceService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  title = "demo-trainee-web";
  submitted = false;
  formgroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.maxLength(8),
    ]),
    checkbox: new FormControl("", [Validators.required]),
  });
  responsedata: any;

  constructor(
    private router: Router,
    private authservice: AuthserviceService,
    private http: HttpClient
  ) {}

  ngOnInit() {}
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

    //   this.http.post('https://api-demo-trainee-dev.cardinalityai.xyz/auth/login', request).subscribe(res => {

    //   })
    //   this.submitted = true;

    //   if (this.formgroup.valid) {

    //     this.router.navigate(['/landing'])

    //   }
    //   else {
    //     return;
    //   }
    // }
  }
}
