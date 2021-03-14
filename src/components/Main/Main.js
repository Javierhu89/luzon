import React, { Component } from "react";
import './Main.scss';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
class Main extends Component {
  render() {
    return (<div style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/img/IntroBack.png'})`,
      backgroundRepeat: 'no-repeat', BackgroundSize: 'cover', position:'absolute',top:0, width:'100%'
    }}>
      <Header />
      <div className="introduccion">
      <p className="descripcion">La <span className="modificarcolor">Fundación Luzón</span> es una organización independiente, sin ánimo de lucro y dedicada por completo a la mejora de las condiciones con las que viven los pacientes con <span className="modificarcolor">ELA</span> y sus familiares.</p>
      <a href="https://ffluzon.org/" className="externa">Visita nuestra página para saber más.</a>
      <p className="elalife"><span className="modificarcolor">#ELALIFE</span> se inspiró para apoyar la causa y concienciar sobre la enfermedad</p>
      <div className="donjug">
      <Link to={'/Onboarding'}>
        <button id="siguiente">
          Siguiente
        </button>
      </Link>
      </div>
    </div>
    </div>
    )
  }
}

export default Main;
