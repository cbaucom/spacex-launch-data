import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

import Card from '../card/card.component';

const FavoriteButton = ({ isFavorite, onClick }) => (
  <FaHeart
    style={{
      cursor: 'pointer',
      position: 'absolute',
      top: 15,
      right: 15,
      width: 30,
      height: 30,
    }}
    color={isFavorite ? '#CB2022' : '#fbfbfb'}
    onClick={onClick}
  />
);

const MissionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  width: 90%;
  height: 200px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .launch-success {
		color: ${props => (props.launchSuccess ? '#12ED01' : 'darkred')};
		font-size: 1.5rem;
		font-weight: 700;
  }
`;

const LaunchItem = ({ launch, onFavoriteChange, favorite }) => {
  const { launch_year, links, mission_name, launch_success, rocket } = launch;

  return (
    <Card>
      <h4 style={{ margin: 0 }}>{launch_year}</h4>
      {links.mission_patch_small ? (
        <img src={links.mission_patch_small} alt={mission_name} />
      ) : (
        <img
          src="https://via.placeholder.com/256x256?text=SpaceX+Patch+Coming+Soon"
          alt={mission_name}
        />
      )}
      <FavoriteButton
        isFavorite={favorite}
        onClick={() => onFavoriteChange(mission_name)}
      />
      <MissionInfo launchSuccess={launch_success}>
        <h3>
          Mission:{` `}
          <span>{mission_name}</span>{' '}
        </h3>
        <ul>
          <li>
            Launch Successful:{` `}
            <span className="launch-success">
              {launch_success ? 'Yes' : 'No'}
            </span>
          </li>
          <li>
            Rocket:{` `}
            <span>{rocket.rocket_name}</span>
          </li>
        </ul>
      </MissionInfo>
    </Card>
  );
};

export default LaunchItem;
