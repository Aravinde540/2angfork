import { Component } from '@angular/core';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css'
})
export class ComicComponent {
  c = 0;
  name="raj"
  incr() {
    this.c++;
    console.log(this.c)
  }
}
