import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import About from './components/About';
import Draw from './components/Draw';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="/draw" element={<Draw />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
