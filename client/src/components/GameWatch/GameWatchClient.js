import "./game-watch-client.css";
//This is the Blog App's Home Page, also serving as its harness
const GameWatchClient = () => {
    const content = (
        <div className="page">
            <div id="game-watch-client">
                <header>This is the Client Window</header>

                <header className="game-list-header">Current Game List</header>
                <div>
                    <ul className="game-list">
                        <div>Populate games here</div>
                    </ul>
                </div>
                <hr/>
            </div>
       </div>
       )
       return content
   }
   
   export default GameWatchClient;