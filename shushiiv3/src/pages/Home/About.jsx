import shushii from "../../assets/Images/shushii.GIF"
import general from "../../assets/Images/general.png"
import dinosaur from "../../assets/Images/dinosaur.png"
import astronaut from "../../assets/Images/astronaut.png"
import secret from "../../assets/Images/secret.png"
import f1 from "../../assets/Images/f1.png"
import f2 from "../../assets/Images/f2.png"
import f3 from "../../assets/Images/f3.png"
import f4 from "../../assets/Images/f4.png"
import f5 from "../../assets/Images/f5.png"
import m1 from "../../assets/Images/m1.png"
import m2 from "../../assets/Images/m2.png"
import m3 from "../../assets/Images/m3.png"
import m4 from "../../assets/Images/m4.png"
import m5 from "../../assets/Images/m5.png"
import sticker1 from "../../assets/Images/sticker1.PNG"
import sticker2 from "../../assets/Images/sticker2.PNG"
import sticker3 from "../../assets/Images/sticker3.PNG"
import sticker4 from "../../assets/Images/sticker4.PNG"
import './about.css'


export default function About(){


    return(
        <div className='about' >
        <div className="a1">
        <div className="a3">
        <img src={shushii} alt="shushii"/>
        </div>

        <div className="a2">
                 <h2 className="white">
                   "Shushii" is a collection of 5,000 NFTs. 
                   It embodied a spirit of rebellion, shattering stereotypes, 
                   challenging biases, and fighting against discrimination. 
                   Each Shushii NFT featured a finger over the lips, as if hushing the noise of negativity. 
                    #Shushii4Peace
                    </h2>
                   
                      <a href="https://discord.gg/BsUbSdtucQ">
                    <button 
                     > Join Discord</button> 
                    </a>
        </div>
        </div>
        
<div className="collection">
        <h3 class="main-title">COLLECTION</h3>
        <h2 className="white">Shushii features over 200 hand-drawn traits, <br/>
        each unique and perfect for collectors.</h2>

        <div className="a4">
        <div class="container">
         <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={general} alt=""/>
      <div class="content-details">
        <h3 class="content-title">Regular</h3>
      </div>
  </div>
</div>



<div class="container">
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={dinosaur} alt=""/>
      <div class="content-details">
        <h3>Rare</h3>
      </div>
  </div>
</div>

<div class="container">
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={astronaut} alt=""/>
      <div class="content-details">
        <h3>Rare</h3>
      </div>
  </div>
</div>
<div class="container">
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={secret} alt=""/>
      <div class="content-details">
        <h3>Ultra Rare</h3>
      </div>
     </div>
    </div>

    </div>
  
    <div className="inner">
    <div className="swipeleft">
    <img src={f1} alt="shushii1"/>
    <img src={f2} alt="shushii2"/>
    <img src={f3} alt="shushii3"/>
    <img src={f4} alt="shushii4"/>
    <img src={f5} alt="shushii5"/>
    </div>
    </div>


    <div className="inner">
    <div className="swipeleft">
    <img src={m1} alt="shushii1"/>
    <img src={m2} alt="shushii2"/>
    <img src={m3} alt="shushii3"/>
    <img src={m4} alt="shushii4"/>
    <img src={m5} alt="shushii5"/>
    </div>
    </div>


     
       </div>

       <div className="how-to-wl">
<h3 class="main-title"> How to Get WL? </h3>
  
  <h2 className="white">Increase your chances by participating in the 
   <br/>games in the community or complet quests on Zealy.</h2>
   <a href="https://zealy.io/c/shushii/questboard">
               <button 
                >Complete Quests to get WL</button> 
               </a>
  </div>

      <div className="roadmap">
       <h3 className="main-title">ROADMAP</h3>
       <div className='roadmap_container'>
        <div className="phase">
        <h2>Phase 1</h2>
        <h3>
        Free Mint Spots: 20<br/>
        Public Mint Price: 0.02 ETH<br/>
        WL Mint Price:0.01 ETH
        </h3>

        </div>
        <div className="phase">
        <h2>Phase 2</h2>
        <h3>
        Public Mint Price: 0.021 ETH<br/>
        WL Mint Price:0.012 ETH
        </h3>

        </div>
        <div className="phase">
        <h2>Phase 3</h2>
        <h3>
        Public Mint Price: 0.022 ETH<br/>
        WL Mint Price:0.014 ETH
        </h3>

        </div>
        <div className="phase">
        <h2>Phase 4</h2>
        <h3>
        Public Mint Price: 0.023 ETH<br/>
        WL Mint Price:0.016 ETH
        </h3>

        </div>
        <div className="phase">
        <h2>Phase 5</h2>
        <h3>
        Public Mint Price: 0.024 ETH<br/>
        WL Mint Price:0.018 ETH
        </h3>

        </div>
        <div className="phase">
        <h2>Phase 6</h2>
        <h3>
        Public Mint Price: 0.025 ETH<br/>
        WL Mint Price:0.02 ETH
        </h3>

        </div>


         </div>
         
         </div>
       <div className="utility">
       <h3 class="main-title">UTILITIES</h3>
       <div className="utility-container">
       <h2 className="white">
       <img src={sticker1} alt="sticker1"/> Shushii Holders get to participate in the Trait Hunting game and have a chance to win $20 in ETH weekly.<br/>

        <img src={sticker3} alt="sticker3"/>  Shushii Holders holding more than 10+ Shushiis will receive a specially designed package, including a t-shirt, hat, stickers, and pins.<br/>

        <img src={sticker4} alt="sticker4"/> After all Shushiis are minted, Shushii Holders will receive free courses on how to create your own NFT in the most cost-effective way.<br/>
       </h2>
       </div>
       </div>
    
            
    </div>
   

    )

    }
