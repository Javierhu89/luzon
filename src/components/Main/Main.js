import React, { Component } from "react";
import './Main.scss';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
class Main extends Component {
  render() {
    return (
    <> 
      <Header />
      <div className="introduccion">
      <p className="descripcion">La <span className="modificarcolor">Fundación Luzón</span> es una organización independiente, sin ánimo de lucro y dedicada por completo a la mejora de las condiciones con las que viven los pacientes con <span className="negrita">ELA</span> y sus familiares.</p>
      <a href="https://ffluzon.org/" className="externa">Visita nuestra página para saber más.</a>
      <p className="elalife">#ELALIFE se inspiró para apoyar la causa y concienciar sobre la enfermedad</p>
      <div className="donjug">
      <Link to={'/donar'}>
        <button id="donar">
          Colaborar
        </button>
      </Link>
      <Link to={'/game'}>
        <button id="jugar">
          Jugar
        </button>
      </Link>
      </div>
    </div>
    </>)
  }
}

export default Main;
