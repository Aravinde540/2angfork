import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MovieComponent } from './movie/movie.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
    {
        path:'movie/:id',component:MovieComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'**',component:NotfoundComponent
    }
];
