import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './container/AboutUs/AboutUs';
import Contacts from './container/Contacts/Contacts';
import Home from './container/Home/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={(
          <Home/>
        )}/>
        <Route path='/About-us' element={(
          <AboutUs/>
        )}/>
        <Route path='/Contacts' element={(
          <Contacts/>
        )}/>
      </Routes>
    </div>
  );
}

export default App;
