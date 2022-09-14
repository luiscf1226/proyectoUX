import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';
import gmail from '../images/gmail.png';
import facebook from '../images/face.jpg';
import { useNavigate } from "react-router-dom";
import logoprincipal from '../images/logo-main.png';
import Axios from 'axios';
import {useState} from 'react';



function Login(){
    
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState ('');

    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        Axios.post('http://localhost:3001/login', {
           Correo: correo,
           Password: password,
        }).then((response) => {
           if (!response.data.message) {
              setLoginStatus( response.data.message);
           } else {
              setLoginStatus (response.data[0].message);
           }
        });
        };


    const navigate= useNavigate();
    const crearcuenta=()=>{
        navigate('/Crear-cuenta'); 
    }
    const entrar=()=>{
        navigate('/Cines'); 
    }
   
    return (
        <div className='login'>
            <span className='span-unitec'>UNITEC</span>
            <h1 className='header'>
                <img src={logoprincipal}></img>
            </h1>
            <span className='span-inicio'>Iniciar sesión</span>
            <form>
                <div className="form-login">
                    <input className='input1' placeholder='Correo o Celular' 
                    onChange={(e) => {setCorreo(e.target.value)}}>
                    </input>
                    <input className='input2' placeholder='Contraseña' type='password'
                    onChange={(e) => {setPassword(e.target.value)}}>
                    </input>
                  

                </div>
            </form>
            <span className='span-olvidar'>¿Olvidaste tu contraseña?</span>
            <div className="botones">
                <button  onClick={()=>{entrar(); login()}} className='button1'>Iniciar Sesión</button>
                <button  className='button2' onClick={()=>crearcuenta()}>Crear Cuenta</button>
            </div>
            
            <span className='span-final'>También puedes entrar con</span>
            <div className="opciones-login">
                <img className='img-mail' src={gmail}></img>
                <img className='img-mail' src={facebook}></img>
            </div>
          
            
           
    
        </div>
    );

}

export default Login;