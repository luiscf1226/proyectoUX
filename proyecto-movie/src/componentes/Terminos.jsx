import React from "react";
import { useNavigate } from "react-router-dom";
import './Terminos.css';



function Terminos (){
    const navigate= useNavigate();
    const bienvenido=()=>{
        navigate('/bienvenido'); 
    }


    return(
        <div className="terminos">

            <div className="heading">
                <button onClick={()=>bienvenido()} className='button-principal' > 
                    <i class="fa-solid fa-arrow-left fa-2xl"></i>
                </button>
                
                <h4> <strong>Terminos y Condiciones de uso </strong></h4> <br/>
            </div>

            <p>El titular no responde por la continuidad y disponibilidad del contenido, 
                productos y/o servicios en a largo plazo, se realizará acciones que fomenten 
                el buen funcionamiento de dicho sitio web sin responsabilidad alguna. 
                El titular no se responsabiliza de que el software esté libre de errores 
                que puedan causar un daño al software y/o hardware del equipo del cual el usuario 
                accede al sitio web. De igual forma, no se responsabiliza por los posibles daños 
                psicológicos que puedan ocasionar el acceso y  utilización del sitio web.  
            </p>

        </div>
    );
}

export default Terminos;