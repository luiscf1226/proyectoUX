import React from "react";
import './NuevaCuenta.css';
import logomain from '../images/logo-main.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function NuevaCuenta() {

    const navigate= useNavigate();
    const bienvenido=()=>{
        navigate('/login'); 
    }

    const crearCuenta = () =>{
        Axios.post('http://localhost:3001/register', {
            Primer_Nombre: usernameReg,
            Primer_Apellido: apellido,
            Passwordl: passwordReg,
            Correo: correo,
            Telefono: "55555555"
        })
    }

    const [usernameReg, setUernameReg] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [passwordReg, setPasswordReg] = useState ('');
    const [password, setConfirmPass] = useState('');


    return (
        
        <div className="principal-frame">
            <span className='span-unitec'>UNITEC<br></br>
            <button onClick={()=>bienvenido()} className="btn-flecha-crear">
                <i class="fa-solid fa-arrow-left fa-2xl flecha-crear"></i>
            </button>
           
            </span>
           
            <div className="heading-crear">
                <img src={logomain} className='img-crear'></img>
            </div>

            <br />
            <br />

            <div className="cuerpo-c">

                <h4>Crear Cuenta</h4>

                <div>
                    <input type="text" placeholder="  Nombre" className="nombreC" 
                    onChange={(e) => {setUernameReg(e.target.value)}}/>
                </div>

                <div>
                    <input type="text" placeholder="  Apellido" className="apellidoC" 
                    onChange={(e) => {setApellido(e.target.value)}}/>
                </div>

                <div>
                    <input type="email" placeholder="  Correo" className="correoC" 
                    onChange={(e) => {setCorreo(e.target.value)}}/>
                </div>

                <div>
                    <input type="password" className="  passC" placeholder="Password" 
                    onChange={(e) => {setPasswordReg(e.target.value)}}/>
                </div>

                <div>
                    <input type="password" className="  repeatPassC" placeholder="Repeat Password" 
                    onChange={(e) => {setConfirmPass(e.target.value)}}/>
                </div>

            </div>


            

            <div className="permisos">

                <div>
                    <input type="checkbox" className="check1" value={1}/>
                </div>
                
                <p>Leo y Acepto los Términos de uso y condiciones</p>
            </div>


            <div className="notificaciones">
                <div>
                    <input type="checkbox" className="check2" value={1}/>
                </div>
                
                <p>Deseo recibir notificaciones en mi correo electronico</p>
            </div>


            <div className="boton-crear">
                <button onClick={()=> {bienvenido(); crearCuenta()}} className="bt-crear"><strong>Crear Cuenta</strong></button>
            </div>
            




        </div>
    );

}

export default NuevaCuenta;