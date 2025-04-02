import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private sub = new Subject();

  sendMsg(m:string) {
    this.sub.next(m)
  }
  getData() {
    return this.sub.asObservable()
  }
}
