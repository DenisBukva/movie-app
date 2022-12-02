import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movieSlice';
import showReducer from './shows/showSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    shows: showReducer,
  },
});
