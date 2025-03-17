import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  isShow = false;
  user="parent"
  fun() {
    if (this.isShow == true) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
  isSigned = false;
}
