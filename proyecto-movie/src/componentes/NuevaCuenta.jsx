import React from "react";
import './NuevaCuenta.css'

function NuevaCuenta() {




    return (

        <div className="principal-frame">

            <div className="heading-crear">
                <strong>LOGO</strong>
            </div>

            <br />
            <br />

            <div className="cuerpo-c">

                <h4>Crear Cuenta</h4>

                <div>
                    <input type="text" placeholder="  Nombre" className="nombreC" />
                </div>

                <div>
                    <input type="text" placeholder="  Apellido" className="apellidoC" />
                </div>

                <div>
                    <input type="email" placeholder="  Correo" className="correoC" />
                </div>

                <div>
                    <input type="password" className="  passC" placeholder="Password" />
                </div>

                <div>
                    <input type="password" className="  repeatPassC" placeholder="Repeat Password" />
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
                <button className="bt-crear"><strong>Crear Cuenta</strong></button>
            </div>
            




        </div>
    );

}

export default NuevaCuenta;