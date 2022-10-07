import React from "react";
import "./App.css"
import "./componentes/datosPersonales.css";
import {FaBars} from "react-icons/fa"

function App() {
  
    return (
        <div> 
            <div className="header">
                <h1>
                    Nueva tabla
                </h1>
                <button className="boton-guardar">Guardar</button>
            </div>
            <hr />
            <div className="body">
                <article className="datos">
                    <div>
                        <h2 className="nombre-titulo">Nombre</h2>
                        <input className="nombre-input" placeholder="Person"></input>                       
                    </div>
                    <div>
                        <h2 className="descripcion-titulo">Descripcion</h2>
                        <textarea className="descripcion-input" placeholder="Tabla usada para x y z"></textarea>
                    </div>
                </article>
                <article className="Atributos">
                    
                </article>
                <hr />
            </div>
        </div>
    )
}

export default App;

