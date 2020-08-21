import { SET_GAME } from '../constants/action-types';

export function setGame(payload) {
  return { type: SET_GAME, payload };
}

export function createNewGame(history) {
  return dispatch => fetch(`${CONFIG.api.hostname}/game`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
  .then(game => game.json())
  .then(game => history.push(`/game/${game.gameId}`));
}

export function fetchGame(gameId) {
  return dispatch => fetch(`${CONFIG.api.hostname}/game/${gameId}`)
  .then(game => game.json())
  .then(game => dispatch(setGame(game)));
}

export function resolveAction(gameId, roomId, actionId, actionChoice) {
  return dispatch => fetch(`${CONFIG.api.hostname}/game/${gameId}/${roomId}/${actionId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(actionChoice)
  })
  .then(game => game.json())
  .then(game => dispatch(setGame(game)));
}