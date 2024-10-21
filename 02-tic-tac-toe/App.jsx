import Player from "./src/components/Player.jsx";
import GameBoard from "./src/components/GameBoard.jsx";
import { useState } from "react";
import Log from "./src/components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./src/components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {

  const [ gameTurns, setGameTurns ] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
    ) {
      console.log("we've got a winner");
      winner = firstSquareSymbol;
      break;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);
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
          <Player initialName='player 1' symbol='X' isActive={currentPlayer === 'X'} />
          <Player initialName='player 2' symbol='O' isActive={currentPlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard
            onSelectSquare={handleSelectSquare}
            board={gameBoard}
        />
    </div>
      <Log turns={gameTurns} />
  </main>
  );
}

export default App
