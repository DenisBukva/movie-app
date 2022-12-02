import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (search) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=series`);
  return response.data;
});

const initialState = {
  shows: {},
  selectMovieOrShow: {},
};

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    removeSelecterMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncShows.pending]: () => {
      console.log('Pending Shows');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fatched Show Success');
      state.shows = payload;
    },
    [fetchAsyncShows.rejected]: () => {
      console.log('Rejected Shows');
    },
  },
});

export const getAllShows = (state) => state.shows.shows;
export default showSlice.reducer;
