import {React} from 'react';
import './navbar.css'
import etherscan from "../../assets/social-media-icons/etherscan.png";
import twitter from "../../assets/social-media-icons/twitter.png";
import discord from "../../assets/social-media-icons/discord.png";
import opensea from "../../assets/social-media-icons/opensea.png";



const NavBar = ()=>{

    return(
       <header>
       <nav className='navbar'>
     
       <ul className='socials'>
       
        <li>
            <a href="https://twitter.com/Shushii_NFT"  target="_SEJ" rel="noreferrer">
                <img src={twitter} alt='twitter'/>
            </a>

         </li>
          <li>
            <a href="https://discord.gg/QrDYtdgJSw" target="_SEJ" rel="noreferrer">
                <img src={discord} alt='discord'/>
            </a>
            </li>
            <li>
             <a href="https://etherscan.io/address/0x5df02cb5d5ad552e5728d3ca20f650cb0d5a94fb"  target="_SEJ" rel="noreferrer">
                <img src={etherscan} alt='etherscan'/>
            </a>
        </li>
            <li>
            <a href="https://opensea.io/collection/shushii" target="_SEJ" rel="noreferrer">
                <img src={opensea} alt='opensea'/>
            </a>
            </li>
       </ul>
   

    </nav>
    </header>


    );
};

export default NavBar;
