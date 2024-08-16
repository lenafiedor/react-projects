import Player from "./components/Player.jsx";

function App() {
  

  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player playerName='player 1' playerSymbol='O'/>
          <Player playerName='player 2' playerSymbol='X'/>
        </ol>
        GAME BOARD
    </div>
  </main>
  );
}

export default App
