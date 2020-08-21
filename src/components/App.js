import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewGamePageContainer from '../containers/NewGamePageContainer';
import GamePageContainer from '../containers/GamePageContainer';

const App = () => (
    <Router>
      <Switch>
        <Route path="/" component={ NewGamePageContainer } exact />
        <Route path="/game/:gameId" component={GamePageContainer} exact />
      </Switch>
    </Router>
);

export default App;
