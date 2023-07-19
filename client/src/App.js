import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatHome from './components/ChatHome';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<ChatHome />}/>
      </Routes>
    </Router>
  );
}

export default App;
