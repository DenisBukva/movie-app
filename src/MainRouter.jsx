import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Footer,
  PageNotFound,
  Header,
} from './components';
import { HomeScreen, MovieListing, MovieDetails } from './pages';
import './App.scss';

const MainRouter = () => {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" index element={<HomeScreen />} />
          <Route path="/movies" element={<MovieListing />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainRouter;
