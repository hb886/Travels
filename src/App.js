import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        
      <Navbar />
      
      <Routes>
        <Route path='/Travels' exact Component={Home} />
        <Route path='/Travels/Services' exact Component={Services} />
        <Route path='/Travels/Products' exact Component={Products} />
        <Route path='/Travels/Sign-up' exact Component={SignUp} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
