export interface Movie 
{
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    genre: string;
    director: string;
    duration: number; // in minutes
    rating: number; // rating out of 10
    posterUrl: string; // Image URL for the movie poster
}
