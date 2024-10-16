import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";

function App() {

  const [ gameTurns, setGameTurns ] = useState([]);
  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevGameTurns) => {
      let currentPlayer = 'X';
      if (prevGameTurns.length > 0 && prevGameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedGameTurns = [
          { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns
      ];
      return updatedGameTurns;
    });
  }
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player initialName='player 1' symbol='O' isActive={activePlayer === 'X'} />
          <Player initialName='player 2' symbol='X' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard
            onSelectSquare={handleSelectSquare}
            turns={gameTurns}
        />
    </div>
      <Log turns={gameTurns} />
  </main>
  );
}

export default App
