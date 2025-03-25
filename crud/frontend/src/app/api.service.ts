import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isDelete = false;
  isShow = false;
  constructor(public hc: HttpClient) { }
  getData() {
    return this.hc.get('http://localhost:3000/movies');
  }
  deleteData(id:any) {
    return this.hc.delete(`http://localhost:3000/movies/${id}`);
  }
  addData(n:string,u:string) {
    return this.hc.post(`http://localhost:3000/movies`, {
      name: n,
      img:u
    });
  }
}
