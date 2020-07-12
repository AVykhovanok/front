import { Component, OnInit } from '@angular/core';
import { CustomAuthService } from '../custom-auth.service';
import { TokenStorageService } from '../token/token-storage.service';
import { SignInForm } from '../../../model/authentication/signin-form.model';
import { Router } from "@angular/router";
import * as $ from 'jquery';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  private loginInfo: SignInForm;

  constructor(private authService: CustomAuthService, private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0,0);
    this.fullHeight(2);
  }

  onSubmit() {

    this.loginInfo = new SignInForm(
      this.loginForm.login,
      this.loginForm.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {

        this.tokenStorage.saveToken(data);
        this.authService.getCurrentUser().subscribe(
          user => this.tokenStorage.saveAuthorities(user.role));

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
    window.location.href = '/home';
  }

  fullHeight = function (divide) {
    $('.js-fullheight').css('height', $(window).height() / divide);
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height() / divide);
    });
  };
}
