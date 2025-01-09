import { Injectable } from '@angular/core';
import { Movie } from '../Classes/movie';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:8080/movies';

  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      releaseDate: '2010-07-16',
      genre: 'Sci-Fi',
      director: 'Christopher Nolan',
      duration: 148,
      rating: 8.8,
      posterUrl: 'https://www.25cineframes.com/images/gallery/2020/04/allu-arjun-pushpa-movie-first-look-ultra-hd-posters-wallpapers/01-Allu-Arjun-PUSHPA-Movie-First-Look-ULTRA-HD-Posters-WallPapers.jpg',
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'Batman faces his greatest challenge yet in Gotham.',
      releaseDate: '2008-07-18',
      genre: 'Action',
      director: 'Christopher Nolan',
      duration: 152,
      rating: 9.0,
      posterUrl: 'https://www.25cineframes.com/images/gallery/2020/04/allu-arjun-pushpa-movie-first-look-ultra-hd-posters-wallpapers/01-Allu-Arjun-PUSHPA-Movie-First-Look-ULTRA-HD-Posters-WallPapers.jpg',
    },
    {
      id: 3,
      title: 'Titanic',
      description: 'A romantic drama set aboard the doomed R.M.S. Titanic.',
      releaseDate: '1997-12-19',
      genre: 'Romance',
      director: 'James Cameron',
      duration: 195,
      rating: 7.8,
      posterUrl: 'https://www.25cineframes.com/images/gallery/2020/04/allu-arjun-pushpa-movie-first-look-ultra-hd-posters-wallpapers/01-Allu-Arjun-PUSHPA-Movie-First-Look-ULTRA-HD-Posters-WallPapers.jpg',
    },
    {
      id: 4,
      title: 'Titanic',
      description: 'A romantic drama set aboard the doomed R.M.S. Titanic.',
      releaseDate: '1997-12-19',
      genre: 'Romance',
      director: 'James Cameron',
      duration: 195,
      rating: 7.8,
      posterUrl: 'https://www.25cineframes.com/images/gallery/2020/04/allu-arjun-pushpa-movie-first-look-ultra-hd-posters-wallpapers/01-Allu-Arjun-PUSHPA-Movie-First-Look-ULTRA-HD-Posters-WallPapers.jpg',
    },
  ];

  constructor(private http: HttpClient) { }
 
  // Simulating an HTTP GET request to fetch movies
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  // Simulating an HTTP GET request to fetch a single movie by id
  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  // Simulating an HTTP POST request to add a new movie
  addMovie(movie: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, movie);
  }

  // Simulating an HTTP PUT request to update an existing movie
  updateMovie(movie: Movie): Observable<Movie | null> {
    return this.http.put<Movie>(`${this.apiUrl}/${movie.id}`,movie);
  }

  // Simulating an HTTP DELETE request to delete a movie
  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
