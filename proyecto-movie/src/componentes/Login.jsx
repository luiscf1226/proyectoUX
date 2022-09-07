import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';
import gmail from '../images/gmail.png';


function Login(){
   
    return (
        <div className='login'>
            <span className='span-unitec'>UNITEC</span>
            <h1 className='header'>LOGO</h1>
            <span className='span-inicio'>Iniciar sesión</span>
            <form>
                <div className="form">
                    <input className='input1' placeholder='Correo o Celular' >
                    </input>
                    <input placeholder='Contraseña' type='password'>
                    </input>
                  

                </div>
            </form>
            <span className='span-olvidar'>¿Olvidaste tu contraseña?</span>
            <div className="botones">
                <Button variant="secondary" className='button1'>Iniciar Sesión</Button>{' '}
                <Button variant="light" className='button2'>Crear Cuenta</Button>{' '}
            </div>
            
            <span className='span-final'>También puedes entrar con</span>
         
            <img className='img-mail' src={gmail}></img>
           
    
        </div>
    );

}

export default Login;