import { Component } from '@angular/core';
import { Movie } from '../../Classes/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../Services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  imports: [FormsModule,CommonModule],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css'
})
export class MovieEditComponent {
  movie: Movie | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovie(movieId).subscribe((data) => {
      this.movie = data!;
    });
  }

  // Update movie details
  updateMovie() {
    if (this.movie) {
      this.movieService.updateMovie(this.movie).subscribe((updatedMovie) => {
        if (updatedMovie) {
          alert('Movie Updated SuccessFully');
          this.router.navigate(['/movie', updatedMovie.id]); // Redirect to the movie detail page
        }
      });
    }
  }

  // Back to movie details without making changes
  cancel() {
    if (this.movie) {
      this.router.navigate(['/movie', this.movie.id]);
    }
  }
}
