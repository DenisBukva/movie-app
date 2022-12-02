import React from 'react';
import './Loader.scss';
import loaderImg from '../../images/loader.gif';

const Loader = () => {
  return (
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
