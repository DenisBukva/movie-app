import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Footer,
  PageNotFound,
  HomeScreen,
  MovieDetails,
  Header,
  MovieListing,
} from './components';
import './App.scss';

const MainRouter = () => {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/movies" component={MovieListing} />
          <Route path="/movie/:imdbID" component={MovieDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default MainRouter;
