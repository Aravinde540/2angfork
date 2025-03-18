import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  arr: string[] = ['raj', 'PRASAD', 'shekhar', 'manu', 'vani'];
  movies: any[] = [
    {
      title: 'RRR',
      link: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg',
    },
    {
      title: 'salaar',
      link: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg',
    },
    {
      title: 'Pushpa',
      link: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg',
    },
  ];
  arr2 = [
    { name: "prasad", role: "deloper" },
    { name: "Jaanu", role: "HR" },
    {name:"angel priya", role:"scamming people"}
]
  // isShow = false;
  // user = 'parent';
  // fun() {
  //   if (this.isShow == true) {
  //     this.isShow = false;
  //   } else {
  //     this.isShow = true;
  //   }
  // }
  // isSigned = false;
}
