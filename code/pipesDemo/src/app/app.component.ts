import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'prasad'
  name2 = 'JAANU'
  products: any;
  price = 20;
  dt = new Date();
  score = 5.8123
  obj = {
    name:"prasad",role:"developer"
  }
  lang="angulae"
}
