import './chat.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect("http://localhost:5000");

function ChatApp(){
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const sendMessage = () => {
        socket.emit("send_message", {message});
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message)
        })
    }, [socket])

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <div className="ChatApp">
            <input placeholder="Message..." onChange={handleInputChange}/>
            <button onClick={sendMessage}>Send Message</button>
            <h1>Messsage:</h1>
            {messageReceived}
        </div>
    )
}

export default ChatApp;