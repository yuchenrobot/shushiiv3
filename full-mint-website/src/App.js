import About from './pages/About/About.jsx';
import Roadmap from './pages/Roadmap/Roadmap.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';
import { Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import MainMint from './pages/MainMint/MainMint.jsx';
import NavBar from './pages/navbar/NavBar.jsx';
import Footer from "./pages/footer/Footer.jsx";

function App() {
  const [accounts, setCurrentAccount]=useState([]);
  const [getNetwork, setCorrectNetwork]=useState(false);


  return (
    <div  className="App">
       <Routes>
       <Route path="/about" element={<About />}/>
       <Route path="/roadmap" element={<Roadmap />}/>
       <Route path="/faq" element={<FAQ />}/>
      </Routes>

        <div>
          <NavBar accounts={accounts} setCurrentAccount={setCurrentAccount}
           getNetwork={getNetwork} setCorrectNetwork={setCorrectNetwork}/>

        </div>
        <div className='_Mint'>
          <MainMint accounts={accounts} setCurrentAccount={setCurrentAccount}
           getNetwork={getNetwork} setCorrectNetwork={setCorrectNetwork}/>
       
        </div>
        <div className='moving-background'></div>
        <Footer/>
        </div>
  );
}

export default App;
