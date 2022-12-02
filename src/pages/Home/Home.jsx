import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowListing, Loader } from '../../components';
import { fetchAsyncShows, getAllShows } from '../../features/shows/showSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const showText = 'Friends';
  const data = useSelector(getAllShows);
  useEffect(() => {
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      {Object.keys(data).length === 0 ? (<Loader />) : (
        <ShowListing />
      )}
    </div>

  );
};

export default HomeScreen;
