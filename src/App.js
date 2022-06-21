import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { About } from './Components/About';
import { Home } from './Components/Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
      <Header title="Todos List" searchBar={false}/>
      <Routes>
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/' element={<Home/>} />
      </Routes>      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
