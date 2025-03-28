import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsDataService } from '../../projects-data.service';
@Component({
  selector: 'app-singleproject',
  standalone: false,
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.css'
})
export class SingleprojectComponent {
  isShow = false;
  id!: string | null; data: any;
  constructor(public ac:ActivatedRoute,public d:ProjectsDataService) {
    this.ac.paramMap.subscribe((res) => this.id = res.get('pno'))
   this.data= this.d.pdata.filter((v:any)=>v.id==this.id)
  }
  fun() {
    this.isShow = this.isShow ? false : true;
  }

}
