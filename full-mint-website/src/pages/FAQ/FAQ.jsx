import NavBar from '../navbar/NavBar.jsx';
import Footer from "../../pages/footer/Footer.jsx";
import './faq.css';


export default function Store(){


    return(
        
        <div className='faq'>
        <NavBar/>
         <div className='faq_container'>
         <h1>FAQ (Scroll down)</h1>
         <h2>How can I buy Shushii?</h2>
         <p>Mint directly from the contract (Open to the public and whitelist members).
         <br/>Mint through the website (Open to the public).
         <br/>Buy an existing Shushii from OpenSea.</p>

         <h2>How do I know which Shushii I am minting?</h2>
         <p>You won't know until after the minting process is complete. 
            The collection is intentionally concealed to prevent people from acquiring the rarest NFTs. 
            This is achieved by an on-chain random function, 
            ensuring everyone has an equal chance to mint the rarest Shushii. Good luck!</p>
         
        <h2>How much does a Shusii cost?</h2>
        <p>The public mint price is 0.02 ETH.<br/>
         The WL mint price is 0.015 ETH.</p>

         <h2>Will the price change?</h2>
         <p>We have a significant possibility of increasing the price of Shushii, which will 
            depend on sales and market conditions. 
            However, we will definitely NOT lower the public mint price below 
            0.02 ETH. The price will remain unchanged until further notice. </p>

         <h2>What can I do with Shushii?</h2>
         <p>For your personal, non-commercial use, 
            you have full flexibility. For commercial use, 
            our team grants holders an unlimited, worldwide, exclusive license to use, copy, and display the purchased artwork for 
            creating derivative works based on it. 
            Commercial use examples include producing and selling merchandise (T-shirts, hats, etc.) featuring copies of the artwork.</p>
         



         </div>
        <Footer/>
         </div>
    )}

