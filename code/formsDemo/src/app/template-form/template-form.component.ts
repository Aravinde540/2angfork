import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  arr = [ 5, 8, 3 ]
  constructor() {
    of(this.arr).subscribe(
      (res) => console.log(res),
      (err) => console.log("error:" + err),
    ()=>console.log("complete"))
  }
}
