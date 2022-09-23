import { Component, OnInit } from '@angular/core';
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
  submitted=false;
  formgroup=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.maxLength(8)]),
    checkbox:new FormControl("",[Validators.required])
  });
  constructor( private router:Router){}
    //  private authservice:AuthserviceService) { }

  ngOnInit() {
  }
  get uname(){
    return this.formgroup.get("username");
  }
  get pwrd(){
    return this.formgroup.get("password");
  }
  sumbit(){
    this.submitted=true;

    if(this.formgroup.valid)
    {

      this.router.navigate(['/landing'])
      
    }
    else{
      return;
    }




  }

}
