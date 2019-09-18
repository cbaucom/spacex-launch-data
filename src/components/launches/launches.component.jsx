import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

import LaunchItem from '../launch-item/launch-item.component';
import { LaunchesContainer } from './launches.styles';

const Launches = () => {
  const [data, loading, error] = useFetch(
    `https://api.spacexdata.com/v3/launches`
  );

  const initialFavorites = () =>
    JSON.parse(window.localStorage.getItem('favorites')) || [];

  const [favorites, setFavorites] = useState(initialFavorites);

  useEffect(() => {
    const favoritesJSON = JSON.stringify(favorites);

    localStorage.setItem('favorites', favoritesJSON);
  }, [favorites]);

  const onFavoriteChange = name => {
    let newFavorites;
    if (favorites.includes(name)) {
      newFavorites = favorites.filter(favorite => favorite !== name);
    } else {
      // clone array
      newFavorites = favorites.splice(0);
      newFavorites.push(name);
    }
    setFavorites(newFavorites);
    JSON.stringify(localStorage.setItem('favorites', newFavorites));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <>Error: {error}</>;

  return (
    <>
      <h1>Launches</h1>
      <LaunchesContainer>
        {data.map(launch => (
          <>
            <LaunchItem
              key={launch.mission_name}
              launch={launch}
              favorite={favorites.includes(launch.mission_name)}
              onFavoriteChange={onFavoriteChange}
            />
          </>
        ))}
      </LaunchesContainer>
    </>
  );
};

export default Launches;
