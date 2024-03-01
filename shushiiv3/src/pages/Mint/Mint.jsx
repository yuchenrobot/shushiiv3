
import React, { useState} from 'react';
import MainMint from './MainMint/MainMint.jsx';
import WLmint from './WLMint/wlmint.jsx'
import "./Mint.css"

function Home() {
    const [accounts, setCurrentAccount]=useState([]);
    const [getNetwork, setCorrectNetwork]=useState(false);
  
  
    return (

        <div  className="Home">
        <div className='_Mint'>
          <h2 className='main-title'>Phase 1 </h2>
          <h2 className='white'> Mint Date: March 2nd</h2>
          </div>
          <MainMint accounts={accounts} setCurrentAccount={setCurrentAccount}
           getNetwork={getNetwork} setCorrectNetwork={setCorrectNetwork}/>   
           <WLmint/> 
  
        <div>
      </div>

        </div>

        
        
        
        )}

        export default Home; 
