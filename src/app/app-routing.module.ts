import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { CactivateGuard } from './cactivate.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'landing',component:LandingPageComponent, canActivate : [CactivateGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponent=[
    LoginComponent,
    LandingPageComponent
]
