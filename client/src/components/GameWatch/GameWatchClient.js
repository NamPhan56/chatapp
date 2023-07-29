/**
 * This is the Blog App's Home Page, also serving as its harness
 */

import "./game-watch-client.css";
import { useEffect, useState } from 'react';
import { io, Manager } from "socket.io-client";


const GameWatchClient = () => {


    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const socket = io('http://localhost:5000', {
        autoConnect: false
      });
      
    // useEffect(() => {
    // }, [])

    /**
     * connects user from socket.io server
     */
    const joinGameList = () => {
        socket.connect();
        socket.on("getGameList", (data) => {
            setMessageReceived(data.message)
        })
    }

    /**
     * disconnects the user from socket.io server
     */
    const leaveGameList = () => {
        socket.disconnect();
    }


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

                <button type="button" onClick={joinGameList}>Join Game List</button>
                <button type="button" onClick={leaveGameList}>Leave Game List</button>

                <hr/>
            </div>
       </div>
       )
       return content
   }
   
   export default GameWatchClient;