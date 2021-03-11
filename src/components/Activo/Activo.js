import React, { Component } from "react";
import './Activo.scss';
import { Link } from 'react-router-dom';
class Activo extends Component {
   
  render() {
    return <><div onClick={() => this.pasarPagina('/seleccion')}> 
    <img className="hello" alt="Mujer Saludando" src={process.env.PUBLIC_URL + '/assets/img/activo.png'} />
    <h2 className="acompanante">MANTENTE AL TANTO</h2>
    <p className="elige">Te mantendremos al día de las últimas noticias relacionadas con la enfermedad, y sabrás que pasa con tu donación a partir del propio testimonio de los pacientes</p>
  </div>
  <div className="donjug">
  <Link to={'/board'}>
        <button id="siguiente">
          Siguiente
        </button>
      </Link>
  </div>
  </>
  }
}

export default Activo;
