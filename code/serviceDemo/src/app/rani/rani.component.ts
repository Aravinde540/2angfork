import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-rani',
  standalone: false,
  templateUrl: './rani.component.html',
  styleUrl: './rani.component.css'
})
export class RaniComponent {
  message=''
  constructor(public ms:MyServiceService){}
  receive() {
    this.message= this.ms.receiveMsg()
  }
}
