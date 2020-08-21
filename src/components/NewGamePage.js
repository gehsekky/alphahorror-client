import React from 'react';
import { useHistory } from 'react-router-dom';
import { jsx } from '@emotion/core';

const NewGamePage = (props) => {
  const history = useHistory();
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col my-auto text-center">
          <button type="submit" onClick={() => props.createNewGame(history)} className="btn btn-primary">
            start new game
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewGamePage;
