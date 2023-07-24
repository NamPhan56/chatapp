import "./game-list.css";
import { useState } from "react";

//This is the Blog App's Home Page, also serving as its harness
const GameWatchList = () => {

    const [gameList, setGameList] = useState([]); //probably should store this on the server
    const [inputValue, setInputValue] = useState('');    


    const inputOnChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const inputSubmit = () => {
        setGameList((gameList) => [...gameList, inputValue])
        setInputValue('');
        //fetch a post to the server to broad cast the new list. add game list array to the server
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