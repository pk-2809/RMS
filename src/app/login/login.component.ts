import { Component, OnInit } from '@angular/core';

import { LoaderComponent } from '../shared/loader/loader.component';
import { LoaderService } from '../shared/loader/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = "";
  constructor(private loader: LoaderService) { }
  ngOnInit(): void {
  }
  onLogin() {
    if (this.username == "pk" && this.password == "1") {
      this.loader.showloader();
      setTimeout(() => {
        this.loader.hideloader();
      }, 5000)
    }
    else {
      // let snack = this.snackbar.open("Unable to Login", 'Login Again');
      // snack.onAction().subscribe((login) => {
      //   this.username = "";
      //   this.password = "";
      //   snack.dismiss();
      // })
    }
  }
}
