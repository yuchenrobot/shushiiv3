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
                   "Shushii" is a collection of 2,000 NFTs. 
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
  
  <h2 className="white">
Post a tweet about Shushii, tag @Shushii_NFT, and include the hashtag #Shushii4Peace. We will follow those accounts with great posts.<br/>

Invite 3 friends to our discord.<br/>

Share your Proof<br/></h2>
   <a href="https://discord.gg/BsUbSdtucQ">
               <button 
                >Share My Proof</button> 
               </a>
  </div>


       <div className="utility">
       <h3 class="main-title">UTILITIES</h3>
       <div className="utility-container">
       <h2 className="white">
       <img src={sticker1} alt="sticker1"/> Shushii Holders get to participate in the Trait Hunting game and have a chance to win $50 in SOL. <br/>

        <img src={sticker3} alt="sticker3"/>  Shushii Holders will have a chance to receive a specially designed package, including a t-shirt, hat, stickers, and pins, and our NFTs will be integrated with social media to provide our holders with real-life benefits that they can use, such as product discounts, cupons, etc.<br/>

        <img src={sticker4} alt="sticker4"/> After all Shushiis are minted, Shushii Holders will receive free courses on how to create your own NFT in the most cost-effective way.<br/>
       </h2>
       </div>
       </div>
    
              
        <div >
            
        <div className="faq">
       <div className='faq_container'>
       <h1 className="main-title">Frequently Asked Questions</h1><br/>
        

         <h2>How do I know which Shushii I am minting?</h2>
         <p>You won't know until after your minting process is complete. 
            The collection is intentionally concealed to prevent people from acquiring the rarest NFTs. 
            This is achieved by an on-chain random function, 
            ensuring everyone has an equal chance to mint the rarest Shushii. Good luck!</p><br/>


        <h2>Do you engage in cross-collaboration?</h2>
         <p>Yes, we do. You can find our community on <a href="https://www.alphabot.app/_/shushii_nft">Alphabot</a>, <a href="https://www.subber.xyz/shushii">Subber</a> and <a href="https://atlas3.io/project/shushii">Atlas3</a>.</p><br/>

         

         <h2>What can I do with Shushii?</h2>
         <p>For your personal, non-commercial use, 
            you have full flexibility. For commercial use, 
            our team grants holders an unlimited, worldwide, exclusive license to use, copy, and display the purchased artwork for 
            creating derivative works based on it. 
            Commercial use examples include producing and selling merchandise (T-shirts, hats, etc.) featuring copies of the artwork.</p><br/>

         

         </div>
         </div>
         
         </div>
    </div>
   

    )

    }
