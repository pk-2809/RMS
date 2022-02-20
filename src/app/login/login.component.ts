import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoaderService } from '../shared/loader/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = "";
  constructor(private loader: LoaderService, private router: Router, private snackbar: MatSnackBar) { }
  ngOnInit(): void {
  }
  onLogin() {
    if (this.username == "pk" && this.password == "1") {
      this.loader.showloader();
      setTimeout(() => {
        this.loader.hideloader();
        this.router.navigate(['/dashboard'])
        this.snackbar.open("Logged In Successfully", '', { duration: 200 });
      }, 500)
    }
    else {
      let snack = this.snackbar.open("Unable to Login", 'Login Again');
      snack.onAction().subscribe((login) => {
        this.username = "";
        this.password = "";
        snack.dismiss();
      })
    }
  }
}
