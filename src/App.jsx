import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Header from './components/common/Header';
import './index.css'

function App() {

  return (
    <div className='App'>
    <Router>
    <Header />
    <div className='content'>
    <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>
    </div>
  )
}

export default App
