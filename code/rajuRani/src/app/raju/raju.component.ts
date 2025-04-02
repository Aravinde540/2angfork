import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-raju',
  standalone: false,
  templateUrl: './raju.component.html',
  styleUrl: './raju.component.css'
})
export class RajuComponent {
  data: string = '';
  constructor(public c:CommonService){}
  sendData() {
    this.c.sendMsg(this.data)
  }
}
