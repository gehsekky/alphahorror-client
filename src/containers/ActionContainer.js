import { connect } from 'react-redux';
import Action from '../components/Action';
import { resolveAction } from '../actions/game';

const mapStateToProps = state => ({
  gameId: state.gameId,
  roomId: state.room.roomId
});

const mapDispatchToProps = dispatch => ({
  resolveAction: (gameId, roomId, actionId, actionChoice) => dispatch(resolveAction(gameId, roomId, actionId, actionChoice))
});

export default connect(mapStateToProps, mapDispatchToProps)(Action);
