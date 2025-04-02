import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-rani',
  standalone: false,
  templateUrl: './rani.component.html',
  styleUrl: './rani.component.css'
})
export class RaniComponent {
  msg:string=''
  constructor(public c:CommonService) { 
  }
  ngOnInit() {
    this.c.getData().subscribe((res: any) => {
      console.log(res);
            this.msg = res;
    })
  }
  
}
