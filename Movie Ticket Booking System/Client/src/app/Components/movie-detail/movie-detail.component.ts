import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../Services/movie.service';
import { Movie } from '../../Classes/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovie(movieId).subscribe((data) => {
      this.movie = data;
    });
  }
  backTolist()
  {
    this.router.navigate(['/movies']);
  }

  editMovie() {
    if (this.movie) {
      this.router.navigate(['/movie/edit', this.movie.id]);
    }
  }

  deleteMovie() {
    if (this.movie) {
      this.movieService.deleteMovie(this.movie.id).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    }
  }
}
