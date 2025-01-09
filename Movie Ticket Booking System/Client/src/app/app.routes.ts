import { Routes } from '@angular/router';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component';
import { MovieAddEditComponent } from './Components/movie-add-edit/movie-add-edit.component';
import { MovieEditComponent } from './Components/movie-edit/movie-edit.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: '/movies', 
        pathMatch: 'full'
    },
    { 
        path: 'movies', 
        component: MovieListComponent 
    },
    { 
        path: 'movie/:id', 
        component: MovieDetailComponent 
    },
    { 
        path: 'movie-add', 
        component: MovieAddEditComponent 
    },
    // { 
    //     path: 'movie/edit/:id', 
    //     component: MovieAddEditComponent 
    // },
    {
        path: 'movie/edit/:id',
        component: MovieEditComponent
    }
];
