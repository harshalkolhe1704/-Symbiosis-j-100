package com.trg.moviemodule.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trg.moviemodule.entity.Movie;
import com.trg.moviemodule.service.MovieService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/movies")
public class MovieController 
{
	@Autowired
	private MovieService movieService;
	
	//get all movies
	@GetMapping
	public List<Movie> getAllMovies()
	{
		return movieService.getAllMovies();
	}
	
	//get movie by id
	@GetMapping("/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable Long id)
	{
		Movie movie = movieService.getMovieById(id);
		return ResponseEntity.ok(movie);
	}
	
	//add new movie
	@PostMapping()
	public Movie addMovie(@RequestBody Movie movie)
	{
		System.out.println(movie.toString());
		return movieService.saveMovie(movie);
	}
	
	//update movie
	@PutMapping("/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie updateMovie)
	{
		Movie movie = movieService.updateMovie(id, updateMovie);
		return ResponseEntity.ok(movie);
	}
	
	//delete a movie
	@DeleteMapping("/{id}")
	public void deleteMovie(@PathVariable Long id)
	{
		movieService.deleteMovie(id);
	}
}
