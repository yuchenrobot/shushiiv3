import {Link} from 'react-router-dom';
import './faq.css';


export default function Store(){


    return(
        
        <div >
            
        <div className="faq">
       <div className='faq_container'>
       <h1 className="main-title">Frequently Asked Questions</h1><br/>
        
         <h2>How can I buy Shushii?</h2>
         <p>Mint directly from the contract (Open to the public and whitelist members).
         <br/>Mint through the website (Open to the public).
         <br/>Buy an existing Shushii from OpenSea.</p><br/>

         <h2>How do I know which Shushii I am minting?</h2>
         <p>You won't know until after your minting process is complete. 
            The collection is intentionally concealed to prevent people from acquiring the rarest NFTs. 
            This is achieved by an on-chain random function, 
            ensuring everyone has an equal chance to mint the rarest Shushii. Good luck!</p><br/>
         
        <h2>How much does a Shusii cost?</h2>
        <p>Shushii’s price will vary based on the phase; it will be lower in the early stages. 
         Check out our <Link to="/" > Road Map </Link> to see the cost at each stage.</p><br/>


        <h2>How many Shushiis can I mint?</h2>
        <p>Max 20 per wallet</p><br/>

        <h2>Do you engage in cross-collaboration?</h2>
         <p>Yes, we do. You can find our community on <a href="https://www.alphabot.app/_/shushii_nft">Alphabot</a>, <a href="https://www.subber.xyz/shushii">Subber</a> and <a href="https://atlas3.io/project/shushii">Atlas3</a>.</p><br/>


        <h2>What are the benefits of holding a shushii?</h2>
         <p>Shushii Holders enjoy various benefits within our community. Firstly, they have the opportunity to participate in the Trait Hunting game, where they stand a chance to win $20 in ETH on a weekly basis. Additionally, Shushii Holders automatically gain access to the exclusive Web3 Job Board channel. Those holding 10 or more Shushiis are entitled to receive a specially designed package, which includes a t-shirt, hat, stickers, and pins.

Furthermore, once all Shushiis are minted, Shushii Holders will be eligible for complimentary courses on creating their own NFTs in the most cost-effective way. These perks contribute to a vibrant and engaging experience for our Shushii community members.</p><br/>
         
         


         <h2>What can I do with Shushii?</h2>
         <p>For your personal, non-commercial use, 
            you have full flexibility. For commercial use, 
            our team grants holders an unlimited, worldwide, exclusive license to use, copy, and display the purchased artwork for 
            creating derivative works based on it. 
            Commercial use examples include producing and selling merchandise (T-shirts, hats, etc.) featuring copies of the artwork.</p><br/>

         
         



         </div>
         </div>
         
         </div>
    )}

