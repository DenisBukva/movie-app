/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllShows } from '../../features/shows/showSlice';
import { MovieCard } from '..';
import './ShowListing.scss';
import Loader from '../loader/Loader';

const ShowListing = () => {
  const shows = useSelector(getAllShows);

  const data = useSelector(getAllShows);

  let renderShows = '';

  renderShows = shows.Response === 'True' ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))
  ) : (
    <div className="shows-error">
      <h3>{shows.Error}</h3>
    </div>
  );
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader />
      ) : (
        <div className="movie-wrapper">
          <div className="show-list">
            <h2>Shows</h2>
            <div className="show-container">{renderShows}</div>
          </div>
        </div>
      )}

    </>

  );
};

export default ShowListing;
