package com.trg.moviemodule.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trg.moviemodule.entity.Movie;
import com.trg.moviemodule.repository.MovieRepository;

@Service
public class MovieService 
{
	@Autowired
	private MovieRepository movieRepository;
	
	//get all movies
	public List<Movie> getAllMovies()
	{
		return movieRepository.findAll();
	}
	
	//get movie by ID
	public Movie getMovieById(Long id)
	{
		return movieRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Movie not found with ID : " + id));
	}
	
	//save a new movie
	public Movie saveMovie(Movie movie)
	{
		return movieRepository.save(movie);
	}
	
	//update a movie
	public Movie updateMovie(Long id, Movie updateMovie)
	{
		Movie existingMovie = movieRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Movie not found with ID :" + id));
		
		existingMovie.setTitle(updateMovie.getTitle());
		existingMovie.setGenre(updateMovie.getGenre());
		existingMovie.setDescription(updateMovie.getDescription());
		existingMovie.setLanguage(updateMovie.getLanguage());
		existingMovie.setReleaseDate(updateMovie.getReleaseDate());
		existingMovie.setPosterUrl(updateMovie.getPosterUrl());
		
		return movieRepository.save(existingMovie);
	}
	//delete a movie
	public void deleteMovie(Long id)
	{
		if(!movieRepository.existsById(id))
		{
			throw new RuntimeException("Movie Not found with Id:" + id);
		}
		movieRepository.deleteById(id);
	}
	
}
