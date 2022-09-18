import React from "react";
import { useNavigate } from "react-router-dom";
import './Recibo.css';
import logomain from '../images/logo-main.png';
import qr from '../images/barra.PNG';
import {useLocation} from 'react-router-dom';
function Recibo(){
    const {state}=useLocation();
    var cine=state.cine;
    var horario=state.horario;
    var pelicula=state.pelicula;
    const navigate= useNavigate();
    const retornocines=()=>{
        navigate('/Cines'); 
    }
    const moverUser=()=>{
        navigate('/Usuario'); 
    }
    const recibogo=()=>{
        navigate('/Recibo'); 
    }
    return(
        <div className="recibo-r">
            <span className='span-unitec-principal-r'>UNITEC</span>
            <div className="div-logo-r">
             <img className="logomain-r" src={logomain}></img>
            </div>
            <div className="recibo-m-div">
                <p className="recibo-r-div">Recibo</p>
                <div className="div-asientos-r">
                    <p>Asientos:2</p> 
                    <p>175.00</p>
                </div>
                <p className="doted-r">-----------------------------------------</p>
                <div className="div-asientos-r">
                    <p>Horario</p> 
                    <p>18:30PM</p>
                </div>
                <div className="div-cines-r3">
                    <p>Cine</p> 
                    <p>{cine}</p>
                </div>
                <div className="div-cines-r3">
                    <p>Pelicula:</p>
                    <p>{pelicula}</p>
                    
                </div>
                
                <img className="qr-code-r" src={qr}></img>
                <p className="gracias-r">¡GRACIAS POR SU PREFERENCIA!</p>
            </div>
            <hr className="linea-r"></hr>
            <div className="user-bar-u">
                
               <button onClick={()=>retornocines()} className="logos-r-bara">
                <i className="fa-solid fa-house"></i>
                </button>
                <button onClick={()=>recibogo()} className="logos-r-bara">
                <i className="fa-solid fa-ticket"></i>
                </button>
                <button onClick={()=>moverUser()} className="logos-r-bara">
                <i className="fa-solid fa-user"></i>
                </button>
             </div> 
        </div>
    );
}
export default Recibo;