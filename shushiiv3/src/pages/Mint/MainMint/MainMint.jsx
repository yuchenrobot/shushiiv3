import React, { useState} from 'react';
import abi from "../../../shushiiAbi.json";
import "./mainmint.css"
import {ethers, BigNumber} from 'ethers';

const SHUSHIINFTAddress = "0x5DF02cB5d5aD552E5728d3ca20f650CB0d5a94Fb";

const MainMint = ()=> {
    
    const [accounts, setCurrentAccount]=useState([]);
    const isConnected = Boolean(accounts[0]);
    async function connectAccount() {
    if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' ,});
    console.log('Found authorized Account: ', accounts[0])
    setCurrentAccount(accounts[0]);
}}
    
const [getNetwork, setCorrectNetwork] = useState(false);
    async function checkCorrectNetwork () {
    const getNetwork = await window.ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + getNetwork)
    const ChainId = '0x1'
    const devChainId = 1337
    const localhostChainId = `0x${Number(devChainId).toString(16)}`

    if (getNetwork !== ChainId && getNetwork !== localhostChainId) {
        alert('Please switch your network to Ethereum Mainet! ')
        setCorrectNetwork(false)
    } else {
        setCorrectNetwork(true)
    }
}

    const[mintAmount, setMintAmount]= useState (1);
   
    async function handleMint () {
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                SHUSHIINFTAddress,
                abi,
                signer
        )

       try{ const nftTx = await contract.publicMint(BigNumber.from(mintAmount),{
        value: ethers.utils.parseEther((0.02* mintAmount).toString()),
       });
      
				console.log(
					"Response", nftTx
				)
		} catch (error) {
			console.log('Error minting character', error)
		}
	}}
    

     const handleDecrement=()=>{
        if(mintAmount<=1)return;
        setMintAmount(mintAmount-1);
     };

        const handleIncrement=()=>{
        if(mintAmount>=10)return;
        setMintAmount(mintAmount+1);
     };

 return(
        <div className='mainmint'>
           
            <div className='words'>
        
                <h2>Public Mint: 0.02 ETH </h2>
               
                <p>
                 You must be connected to mint
                <br/>
                 Make sure you are connected to the Ethereum Mainet
                <br/>
                 Make sure you have enough money in your wallet
                </p>
          
                </div>
               
                <div className='plmint'>
                <ul>
                <li>
                    <button 
                    onClick={handleDecrement}> - </button>
                </li>
                <li>
                   <input name="number"
                    type="number"
                     value={mintAmount} readonly/>
                    </li>
                    <li>
                    <button 
                    onClick={handleIncrement}> + </button>
                 </li>
                  </ul>
                  </div>
          
        <div className='result'>
            { getNetwork ? (
                isConnected ? (
                 <div className='words'>
                <h3 >CONNECTED</h3>
                <button 
                 onClick={handleMint}> Mint Now </button>
                </div>
                 ):(
                <button
                onClick={connectAccount}>Connect Wallet</button> 
                )
                ):(
                    <button
                onClick={checkCorrectNetwork}>Connect Wallet</button>
                )
                }
            </div>

              
      

  
</div>

    );
};

export default MainMint;
