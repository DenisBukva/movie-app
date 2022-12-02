/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from '../../features/movies/movieSlice';
import { DetailsCard } from '..';
import './MovieDetails.scss';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));

    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <DetailsCard details={data} />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
