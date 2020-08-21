import React from 'react';
import { css, jsx } from '@emotion/core';

const resolutionTextGenerator = {
  spawn: resolution => `you chose to ${resolution.description}`,
  navigation: resolution => `you chose to ${resolution.description}`
};

const Action = props => {
  const {
    gameId,
    roomId,
    action,
    resolveAction
  } = props;

  console.log('action', action);
  return (
    <div>
      <p>{action.actionValue.spawn}</p>
      <p>{action.actionValue.description}</p>
      {
        action.resolution !== null ? <p css={{ fontSize: 'smaller' }}><em>{resolutionTextGenerator[action.actionType](action.resolution)}</em></p> :
        <div>
        {
          action.actionValue.choices.map(choice => (
            <div key={choice.name}>
              <button type="button" value={choice.name} className="btn btn-secondary" onClick={() => resolveAction(gameId, roomId, action.actionId, choice)}>
                {choice.description}
              </button>
            </div>
          ))
        }
        </div>
      }
  </div>
)};

export default Action;
