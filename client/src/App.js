import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatHome from './components/ChatHome';
import GameWatch from './components/GameWatch/GameWatchHome';
import GameWatchClient from "./components/GameWatch/GameWatchClient";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatHome />}/>
        <Route path="/GameWatch" element={<GameWatch />} /> 
          <Route path="/GameWatch/Client" element={<GameWatchClient />} /> 
      </Routes>
    </Router>
  );
}

export default App;
