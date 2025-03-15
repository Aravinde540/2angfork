import { Component,AfterViewInit } from '@angular/core';
import { ComicComponent } from './comic/comic.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  x = '';
  @ViewChild(ComicComponent) child!: ComicComponent;
   

}
