import React from "react";

const GameOver = ({ winner, gameOver }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p> It's a draw!</p>}
      <p>
        <button onClick={gameOver}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
