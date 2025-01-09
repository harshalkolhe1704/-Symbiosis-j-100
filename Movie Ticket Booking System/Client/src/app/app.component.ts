import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MovieListComponent } from "./Components/movie-list/movie-list.component";
import { MovieDetailComponent } from "./Components/movie-detail/movie-detail.component";
import { MovieAddEditComponent } from "./Components/movie-add-edit/movie-add-edit.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieListComponent, MovieDetailComponent, MovieAddEditComponent, NavBarComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieManagementModule';
}
