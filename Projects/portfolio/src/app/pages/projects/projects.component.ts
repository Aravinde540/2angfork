import { Component } from '@angular/core';
import { ProjectsDataService } from '../../projects-data.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects_data:any=[]
  constructor(public d:ProjectsDataService) {
   this.projects_data=this.d.pdata
 }
  fun() {
  this.d.isSignin=true
}
}
