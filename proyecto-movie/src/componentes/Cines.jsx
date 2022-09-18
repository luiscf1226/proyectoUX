import React from "react";
import './Cines.css';
import logomain from '../images/logo-main.png';
import cinemark from '../images/cinemark.png';
import cinepolis from '../images/cinepolis.png';
import metrocinemas from '../images/metrocinemas.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Cines(){
    const cines=['CineMark','Cinepolis','MetroCinemas'];
    
    const navigate= useNavigate();
    var [cine,setCine]=useState('CineMark');
    const peliculas1=()=>{
        navigate('/Peliculas',{state:{cine:'CineMark'}}); 
    }
    const peliculas2=()=>{
        navigate('/Peliculas',{state:{cine:'Cinepolis'}}); 
    }
    const peliculas3=()=>{
        navigate('/Peliculas',{state:{cine:'MetroCinemas'}}); 
    }
    const retornohome=()=>{
        navigate('/Login');
    }
    return(
        <div className="cines">
            
            <span className='span-unitec-principal-cine'>UNITEC</span>
            <button onClick={()=>retornohome()} className="btn-flecha-c">
                <i className="fa-solid fa-arrow-left fa-2xl btn-flecha-cine"></i>
            </button>
            <div className="cines-principales-2">
                <button onClick={()=>peliculas1()} className="botones-cines btn-cine-1">
                    <img className="cinemark-cines" src={cinemark}></img>
                </button>
                <button  onClick={()=>peliculas2()}  className="botones-cines btn-cine-2">
                 <img className='cinepolis-cine' src={cinepolis}></img>
                </button>
               
            </div>
            <img className="mainlogo-cine" src={logomain}></img>
            <button onClick={()=>peliculas3()}  className="botones-cines btn-cine-3">
                <img className="metrocinemas-cine" src={metrocinemas}></img>
            </button>
          
            

        </div>
    );
}
export default Cines;