import { connect } from 'react-redux';
import GamePage from '../components/GamePage';
import { fetchGame } from '../actions/game';

const mapStateToProps = state => ({
  gameLoaded: state.gameId,
  player: state.player,
  room: state.room,
  actions: state.actions
});

const mapDispatchToProps = dispatch => ({
  fetchGame: (gameId) => dispatch(fetchGame(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
