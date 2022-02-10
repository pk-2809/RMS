import { Injectable } from '@angular/core';
import { LoaderComponent } from "./loader.component";
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isloader: Boolean = false;
  constructor(private snackbar: MatSnackBar) { }

  showloader() {
    this.isloader = true;
    this.snackbar.openFromComponent(LoaderComponent,);
  }
  hideloader() {
    this.isloader = false;
    this.snackbar.dismiss();
  }
}
