import React from 'react';

const Sidebar = props => (
  <div>
    <div className="card" css={{ width: "18rem" }}>
      <img className="card-img-top" src="https://image.freepik.com/free-vector/lovely-hand-drawn-astronaut-character_23-2147904014.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.player.name}</h5>
        <h6 className="card-text">{props.player.characterClass.name}</h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HP: {props.player.hitPoints}</li>
          <li className="list-group-item">SP: {props.player.spellPoints}</li>
          <li className="list-group-item"></li>
          <li className="list-group-item">STR: {props.player.characterClass.strength}</li>
          <li className="list-group-item">CON: {props.player.characterClass.constitution}</li>
          <li className="list-group-item">DEX: {props.player.characterClass.dexterity}</li>
          <li className="list-group-item">INT: {props.player.characterClass.intelligence}</li>
          <li className="list-group-item">WIS: {props.player.characterClass.wisdom}</li>
          <li className="list-group-item">CHA: {props.player.characterClass.charisma}</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Sidebar;
