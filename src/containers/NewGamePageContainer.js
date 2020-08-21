import { connect } from 'react-redux';
import { createNewGame } from '../actions/game';
import NewGamePage from '../components/NewGamePage';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createNewGame: (history) => dispatch(createNewGame(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGamePage);
