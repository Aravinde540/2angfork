import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularMovies: any[] = [];
  constructor(private api:ApiService) {
    this.api.getPopularMovies().subscribe((res: any) =>
    {
      console.log(res.results)
      this.popularMovies = res.results
    })
  }
}
