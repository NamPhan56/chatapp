import './chat.css';
import ChatApp from  './ChatApp';

//This is the Blog App's Home Page, also serving as its harness
const BlogHome = () => {
 const content = (
    <div className="page">
      <div id="chat-app">
        <header className="header">Chat App</header>
        <p>This is the Chat app.</p>
        <hr/>
        <ChatApp/>
      </div>
    </div>
    )
    return content
}

export default BlogHome;

