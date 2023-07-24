import './chat.css';
import ChatApp from  './ChatApp';
import { Link } from 'react-router-dom';

//This is the Blog App's Home Page, also serving as its harness
const ChatHome = () => {
 const content = (
    <div className="page">
      <div id="chat-app">
        <header className="header">Chat App</header>
        <p>This is the Chat app.</p>
        <hr/>
        <ChatApp/>
        <hr/>

        
        <Link to="/GameWatch" className="Link">
          <button>Go to Game Watch</button>
        </Link>

        <Link to="/GameWatch/Client" className="Link">
          <button>Go to Game Watch Client</button>
        </Link>
        
      </div>
    </div>
    )
    return content
}

export default ChatHome;

