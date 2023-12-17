import './App.css';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Mint from './pages/Mint/Mint.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';
import { Routes, Route} from 'react-router-dom';
import NavBar from './pages/navbar/NavBar.jsx';
import Footer from './pages/footer/Footer.jsx';

function App() {

  return (
    <div>

  <React.StrictMode> 
  <HashRouter>
  <NavBar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/Mint" element={<Mint />}/>
       <Route path="/faq" element={<FAQ />}/>
      </Routes>
     <Footer/>
</HashRouter>
</React.StrictMode>
</div>
  );
}

export default App;
