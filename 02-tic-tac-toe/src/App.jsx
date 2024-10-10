import Player from "./components/Player.jsx";

function App() {

  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player initialName='player 1' symbol='O'/>
          <Player initialName='player 2' symbol='X'/>
        </ol>
        GAME BOARD
    </div>
      LOG
  </main>
  );
}

export default App
