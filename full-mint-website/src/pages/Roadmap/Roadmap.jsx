import roadmap from "../../assets/Images/roadmap1.png"
import NavBar from '../../pages/navbar/NavBar.jsx';
import Footer from "../../pages/footer/Footer.jsx";
import './roadmap.css';


export default function Roadmap (){


    return(
        
        <div className='roadmap'>
          <NavBar/>
            <div className='roadmap_container' >
            <img src={roadmap} alt="roadmap" />     
            </div>
            <Footer/>
         </div>
    )}

