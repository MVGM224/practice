import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthserviceService } from '../auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'demo-trainee-web';
  submitted = false;
  show = false;
  formgroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.maxLength(8)]),
    checkbox: new FormControl("", [Validators.required])
  });

  @ViewChild('showhideinput')
  input;
  constructor(private router: Router,
    // private authservice:AuthserviceService,
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
      email: this.formgroup.controls['username'].value,
      password: this.formgroup.controls['password'].value
    }

    this.http.post('https://api-demo-trainee-dev.cardinalityai.xyz/auth/login', request).subscribe(res => {

    })
    this.submitted = true;

    if (this.formgroup.valid) {

      this.router.navigate(['/landing'])

    }
    else {
      return;
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


