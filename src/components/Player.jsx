import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState();
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handlePlayerName = (event) => {
    setPlayerName(event.target.value);
  };

  let editPlayer = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editPlayer = <input type="text" required onChange={handlePlayerName} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayer}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "save" : "edit"}</button>
      </span>
    </li>
  );
};

export default Player;
