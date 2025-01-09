import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Classes/movie';
import { MovieService } from '../../Services/movie.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService,private router: Router) {}

  ngOnInit(): void {
    this.loadMovies();
    
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe((data) => {
      console.log(data);
      this.movies = data;
    });
  }

  onViewDetails(movieId: number)
  {
    this.router.navigate(['/movie',movieId]);
  }

  addNewMovie()
  {
    this.router.navigate(['/movie-add']);
  }
}
