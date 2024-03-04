import './App.css';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
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
      </Routes>
     <Footer/>
</HashRouter>
</React.StrictMode>
</div>
  );
}

export default App;
