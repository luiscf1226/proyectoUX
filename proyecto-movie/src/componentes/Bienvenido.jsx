
import React, { Component } from 'react';
import './Bienvenido.css'
import logo from '../images/logo.jpg';
//import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
function Bienvenido() {
    const navigate= useNavigate();
    const ingresar=()=>{
        navigate('/login');
    }
    
    return (
        <div className='bienvenido-principal'>
            <span className='span-unitec-principal'>UNITEC</span>
            <h1 className='header-principal'>Bienvenido/a</h1>
            <img className='img-principal' src={logo}></img>
            <h2 className='h2-principal'>Mensaje/Slogan</h2>
            <button onClick={()=>ingresar()} className='button-principal' >
                Comenzar 
                <i class="fa-solid fa-arrow-right flecha"></i>
                
            </button>          
            </div>
           
        );
    
}

export default Bienvenido;