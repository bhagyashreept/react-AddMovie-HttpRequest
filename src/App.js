import React, { Fragment, useState, useEffect, useCallback } from 'react';
import './App.css';
import MoviesList from './components/MoviesList.js';
import AddMovie from './components/AddMovie';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    onClickHandler();
  }, []);

  // async function onClickHandler() {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch('https://react-http-42c1d-default-rtdb.firebaseio.com/movies.json');
  //     if (!response.ok) {
  //       throw new Error('Something went Wrong');
  //     }
  //     const data = await response.json();

  //     const transformedMovies = data.results.map((movieData) => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingCrawl: movieData.opening_crawl,
  //       };
  //     });

  //     setMovies(transformedMovies);
  //     setIsLoading(false);
  //     console.log(movies);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }
  const onClickHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-42c1d-default-rtdb.firebaseio.com/movies.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  async function getAddMovieValues(movie) {
    const response = await fetch(
      'https://react-http-42c1d-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log('IN APP COMOPENTN' + movie.id + movie.title + movie.desc);
    console.log(data);
  }

  return (
    <Fragment>
      <div>
        <AddMovie getValues={getAddMovieValues} />
      </div>
      <div className={'getMovies-btn'}>
        <button onClick={onClickHandler}> Get Movies</button>
      </div>
      {!isLoading && (
        <div>
          <MoviesList movies={movies} />
        </div>
      )}
      {isLoading && !error && <p>Loading..........</p>}
      {isLoading && error && <p>{error}</p>}
    </Fragment>
  );
}
