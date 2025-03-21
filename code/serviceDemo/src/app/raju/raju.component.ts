import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-raju',
  standalone: false,
  templateUrl: './raju.component.html',
  styleUrl: './raju.component.css'
})
export class RajuComponent {
  m=''
  constructor(public ms:MyServiceService) {  
  }
  send() {
    this.ms.addMsg(this.m)
  }
}
