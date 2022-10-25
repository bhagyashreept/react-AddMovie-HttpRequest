import React, { Fragment } from 'react';
import Movie from './Movie.js';

const MoviesList = (props) => {
  return (
    <Fragment>
      {props.movies.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          openingCrawl={movie.openingCrawl}
        />
      ))}
    </Fragment>
  );
};

export default MoviesList;
