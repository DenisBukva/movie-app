/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, getAllMovies } from '../../features/movies/movieSlice';
import { MovieCard, Loader } from '../../components';
import './MovieListing.scss';

const MovieListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const movieText = 'Harry';

  const data = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch]);

  let renderMovies = '';
  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movie-error">
      <h3>{movies.Error}</h3>
    </div>
  );
  return (
    <>
      {
        Object.keys(data).length === 0 ? (
          <Loader />
        ) : (
          <div className="movie-wrapper">
            <div className="movie-list">
              <h2>Movies</h2>
              <div className="movie-container">{renderMovies}</div>
            </div>
          </div>
        )
    }
    </>
  );
};

export default MovieListing;
