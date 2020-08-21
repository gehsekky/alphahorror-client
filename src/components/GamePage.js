import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import GameContent from './GameContent';

const GamePage = (props) => {
  const { gameId } = useParams();
  const {
    game,
    gameLoaded,
    fetchGame,
    player,
    room,
    actions
  } = props;

  useEffect(() => {
    if (!gameLoaded) props.fetchGame(gameId);
  });

  if (!gameLoaded) return null;

  console.log('props', props);

  return (
    <div className="container-fluid m-0 p-0 w-100">
      <div className="row m-0">
        <div className="col-3 p-0"><Sidebar player={player} /></div>
        <div className="col p-0"><GameContent room={room} actions={actions} /></div>
      </div>
    </div>
  );
}

export default GamePage;
