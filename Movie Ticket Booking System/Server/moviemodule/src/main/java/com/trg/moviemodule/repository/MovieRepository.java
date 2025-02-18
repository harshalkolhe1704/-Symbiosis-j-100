package com.trg.moviemodule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trg.moviemodule.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>
{

}
