import GameWatchList from './GameWatchList';

//This is the Blog App's Home Page, also serving as its harness
const GameWatchHome = () => {
 const content = (
    <div className="page">
      <div id="game-watch-home">
        <header className="header">Game Watch App</header>
        <p>This is the Game Watch.</p>
        <hr/>
        <GameWatchList/>
      </div>
    </div>
    )
    return content
}

export default GameWatchHome;
