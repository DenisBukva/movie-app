import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (search) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`);
  return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  },
);

const initialState = {
  movies: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending Movies');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fatched Movies Success');
      state.movies = payload;
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected Movies');
    },
    [fetchAsyncMovieOrShowDetail.pending]: () => {
      console.log('Fetched Movie or Show Detail Successfully!');
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log('Fetched Movie or Show Detail Successfully!');
      state.selectMovieOrShow = payload;
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
