import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ShowListing } from '..';

import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import './Home.scss';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const showText = 'Friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <ShowListing />
    </div>

  );
};

export default HomeScreen;
