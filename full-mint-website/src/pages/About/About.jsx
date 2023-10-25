import shushii from "../../assets/Images/shushii.GIF"
import general from "../../assets/Images/general.png"
import dinosaur from "../../assets/Images/dinosaur.png"
import astronaut from "../../assets/Images/astronaut.png"
import secret from "../../assets/Images/secret.png"
import NavBar from "../../pages/navbar/NavBar.jsx";
import Footer from "../../pages/footer/Footer.jsx";
import './about.css'


export default function About(){


    return(
        <div className='about' >
        <NavBar/>
        <div className="wrapper">
        <div className="a1">
        <div className="a3">
        <img src={shushii} alt="shushii"/>
        </div>
        <h3 class="main-title">COLLECTION</h3>
        <div className="a4">
        <div class="container">
         <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={general} alt=""/>
      <div class="content-details fadeIn-top">
        <h3 class="content-title">Regular</h3>
      </div>
  </div>
</div>

<div class="container">
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={dinosaur} alt=""/>
      <div class="content-details fadeIn-top">
        <h3>Rare</h3>
      </div>
  </div>
</div>

<div class="container">
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={astronaut} alt=""/>
      <div class="content-details fadeIn-top">
        <h3>Rare</h3>
      </div>
  </div>
</div>
<div class="container">
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={secret} alt=""/>
      <div class="content-details fadeIn-top">
        <h3>Ultra Rare</h3>
      </div>
     </div>
    </div>
       </div>

    </div>
   

        <div className="a2">
                <h1>About Shushii</h1>
                 <h3>
                   "Shushii" is a collection of 8,888 NFTs. 
                   It embodied a spirit of rebellion, shattering stereotypes, 
                   challenging biases, and fighting against discrimination. 
                   Each Shushii NFT featured a finger over the lips, as if hushing the noise of negativity. 
                    #Shushii4Peace
                    </h3>
                   
                    <button as="a" href="https://opensea.io/collection/shushii"
                     > View on OpenSea</button> 
        </div>
        </div>
        <Footer/>
        </div>

    )

    }
