import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CustomAuthService} from '../custom-auth.service';
import { AccountDTO } from 'src/app/model/authentication/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountProfile: AccountDTO;
  role: string;

  constructor(private authService: CustomAuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(data => {
      this.accountProfile = data;
      this.role = data.role;
    }, err => {
      this.logout();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }

  initAcc(accountProfile: AccountDTO) {
    this.accountProfile = accountProfile;
  }

  editAccount() {
    this.router.navigate(['account_edit']);
  }

}
