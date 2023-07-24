import "./game-list.css";
import { useState } from "react";

//This is the Blog App's Home Page, also serving as its harness
const GameWatchList = () => {

    const [gameList, setGameList] = useState(["a","b","c"]);
    //let gameList = ["a","b","c"];
    const [inputValue, setInputValue] = useState("");    


    const inputOnChangeHandler = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value);
        
    }

    const inputSubmit = () => {
        gameList.push(inputValue)
        //console.log(gameList);
        setInputValue('');
    }

    const resetList = () => {
        setGameList([])
    }
    
    const content = (
        <div className="page">
            <div id="game-watch-list">
                <header className="game-list-header">Current Game List</header>

                <div>
                    <div className="game-list">
                        <ul>
                            {gameList.map((game, index) => (
                        <div key={index}>{game}</div>
                        ))}
                        </ul>
                    </div>
                </div>

                <form id="input-game">
                    <input onInput={inputOnChangeHandler} value={inputValue ?? ''} autoComplete="off" placeholder="Add a new game"></input>
                    <button id="input-add-btn" type="button" onClick={inputSubmit} >Add</button>
                    <button id="input-reset-btn" type="button" onClick={resetList} >Reset List</button>
                </form>

                <hr/>
            </div>
       </div>
       )
       return content
   }
   
   export default GameWatchList;