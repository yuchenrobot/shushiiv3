import {React, useState} from 'react';
import './navbar.css'
import etherscan from "../../assets/social-media-icons/etherscan.png";
import twitter from "../../assets/social-media-icons/twitter.png";
import discord from "../../assets/social-media-icons/discord.png";
import hambutn from "../../assets/navbar/hambutn.png"
import close from "../../assets/navbar/close.png"
import {Link} from 'react-router-dom';


const NavBar = ()=>{
    const [nav, setNav] = useState(false);

    return(
       <header>
       <nav className='navbar'>
     
       <ul className='socials'>
       <li>
       <a href="https://etherscan.io/address/0x5df02cb5d5ad552e5728d3ca20f650cb0d5a94fb"  target="_SEJ" rel="noreferrer">
                <img src={etherscan} alt='etherscan'/>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/Shushii_NFT"  target="_SEJ" rel="noreferrer">
                <img src={twitter} alt='twitter'/>
            </a>

         </li>
          <li>
            <a href="https://discord.com/invite/YxqwAWgzra" target="_SEJ" rel="noreferrer">
                <img src={discord} alt='discord'/>
            </a>
            </li>
       </ul>
   
        
        <ul className={nav? ['menu','active'].join(' '):['menu']}>
            <li>
            <Link to="/"> HOME </Link>
            </li>
            <li>
             <Link to="/about" >ABOUT  </Link >
            </li>
            <li>
            < Link to="/roadmap"> MAP</Link>
             </li>
            <li>
            < Link to="/faq"> FAQ </Link>
             </li>
        </ul>
        <div onClick={()=> setNav(!nav)} className='mobile_btn'>
        {nav ? <img src={close} alt='close'/> : <img src={hambutn} alt='hambutn'/>}
        </div>
    </nav>
    </header>


    );
};

export default NavBar;
