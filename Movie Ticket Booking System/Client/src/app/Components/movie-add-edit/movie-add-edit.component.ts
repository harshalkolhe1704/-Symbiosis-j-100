import { Component } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../Classes/movie';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-add-edit',
  imports: [FormsModule,CommonModule],
  templateUrl: './movie-add-edit.component.html',
  styleUrl: './movie-add-edit.component.css'
})
export class MovieAddEditComponent {
  movie: any = {

    title: '',
    description: '',
    releaseDate: '',
    genre: '',
    director: '',
    duration: 0,
    rating: 0,
    posterUrl: '',
  };

  isEditMode = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = +this.route.snapshot.paramMap.get('id')!;
    if (movieId) {
      this.isEditMode = true;
      console.log("Edit mode for movie with ID: " , movieId);
      this.movieService.getMovie(movieId).subscribe((data) => {
        this.movie = data!;
      });
    }
    else {
      console.log('Add mode');
      this.isEditMode = false;
    }
  }

  saveMovie(): void {

    if(!this.movie.title || !this.movie.description || !this.movie.releaseDate || !this.movie.genre || !this.movie.director || !this.movie.duration || !this.movie.posterUrl)
    {
      console.log('Form is invalid, please fill all the required fields');
      alert('Please fill all the fields')
      return;
    }
    if (this.isEditMode) {
      this.movieService.updateMovie(this.movie).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    } else {
      this.movieService.addMovie(this.movie).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    }
  }
}
