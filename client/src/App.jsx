import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Home from './pages/Home';

export default function App() {
  return (  
    <Router>
    <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/first' element={<First />} />
      <Route path='/second' element={<Second />} />
      <Route path='/third' element={<Third />} />
      </Routes>
    </Router>
  ) 
}

