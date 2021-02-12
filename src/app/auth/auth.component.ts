import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponseData } from './auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService, private router: Router){}
    isLoggedIn = true;
    isLoading = false;
    error:string = null;

  onSwitchedMode(){
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm){
    // console.log(form.value);
    if (!form.value){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoggedIn){
      authObs = this.authService.login(email, password);
    }else{
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(resData =>{
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    });

    form.reset();
  }

}
