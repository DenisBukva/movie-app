/* eslint-disable react/jsx-indent */
import React from 'react';
import './MovieDetailsCard.scss';

const DetailsCard = ({ details }) => {
  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
    Poster,
  } = details;
  return (
    <>
    <div className="section-left">
      <div className="movie-title">{Title}</div>
      <div className="movie-rating">
        <span>
          IMDB Rating
{' '}
<i className="fa fa-star"></i>
{' '}
:
{' '}
{imdbRating}
        </span>
        <span>
          IMDB Votes
{' '}
<i className="fa fa-thumbs-up"></i>
{' '}
:
{' '}
          {imdbVotes}
        </span>
        <span>
          Runtime
{' '}
<i className="fa fa-film"></i>
{' '}
:
{' '}
{Runtime}
        </span>
        <span>
          Year
{' '}
<i className="fa fa-calendar"></i>
{' '}
:
{' '}
{Year}
        </span>
      </div>
      <div className="movie-plot">{Plot}</div>
      <div className="movie-info">
        <div>
          <span>Director</span>
          <span>{Director}</span>
        </div>
        <div>
          <span>Stars</span>
          <span>{Actors}</span>
        </div>
        <div>
          <span>Generes</span>
          <span>{Genre}</span>
        </div>
        <div>
          <span>Languages</span>
          <span>{Language}</span>
        </div>
        <div>
          <span>Awards</span>
          <span>{Awards}</span>
        </div>
      </div>
    </div>
    <div className="section-right">
      <img src={Poster} alt={Title} />
    </div>
    </>
  );
};

export default DetailsCard;
