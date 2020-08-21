import React from 'react';
import ActionContainer from '../containers/ActionContainer';

const GameContent = props => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">location ({props.room.coordinateX}, {props.room.coordinateY})</h5>
      <h6 className="card-text">{props.room.description}</h6>
      <ul className="list-group list-group-flush">
      {
        props.actions.reverse().map(action =>
          <li key={action.actionId} className="list-group-item">
            <ActionContainer action={action} />
          </li>
        )
      }
      </ul>
    </div>
  </div>
)

export default GameContent;
