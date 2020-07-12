import { Component, OnInit } from '@angular/core';
import { CustomAuthService } from '../custom-auth.service';
import { TokenStorageService } from '../token/token-storage.service';
import { SignUpForm } from '../../../model/authentication/signup-form.model';
import { Router } from "@angular/router";
import * as $ from 'jquery';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private signupInfo: SignUpForm;
  
  constructor(private authService: CustomAuthService,
              private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0);
    this.fullHeight(2);
  }

  onSubmit() {


    this.signupInfo = new SignUpForm(this.model.login, this.model.firstName,
      this.model.lastName, this.model.password, this.model.email, this.model.about);
    
      this.authService.signUp(this.signupInfo).subscribe(
        data => {
      
          this.tokenStorage.saveToken(data);
          
          this.isLoginFailed = false;
          this.isLoggedIn = true;
  
          this.router.navigate(['account']).then(e => {
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          });
          
          },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
  }
 
  reloadPage() {
    window.scroll(0,0);
    window.location.href='/home';
  }

  fullHeight = function(divide) {
		$('.js-fullheight').css('height', $(window).height()/divide);
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height()/divide);
		});
    };
}
