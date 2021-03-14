import React, { Component } from "react";
import Header from "../Header/Header";
import './Home.scss';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return <div style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/img/IntroBack.png'})`,
      backgroundRepeat: 'no-repeat', BackgroundSize: 'cover', position:'absolute',top:0, width:'100%',  height: '100vh'
    }}>
      <Header />
      <h1 className="titulo">Sobre la ELA</h1>
      <img alt="Lupa sujetada por dos personas" className="lupa" src={process.env.PUBLIC_URL + '/assets/img/lupa.png'}></img>
      <p className="sobre">La ELA (Esclerosis Lateral Amiotrófica) es una enfermedad del sistema nervioso central que produce una degeneración progresiva de las neuronas motoras </p>
      <p className="sobre">Es la enfermedad de neuronas motoras más frecuente del adulto.</p>
      <p className="sobre">Es una enfermedad sin tratamiento curativo, con una esperanza de vida entre 3 y 5 años.</p>
      <div className="donjug">
      <Link to={'/Game'}>
        <button className="siguiente play">
          JUGAR
        </button>
      </Link>
      <Link to={'/Donar'}>
        <button className="siguiente play">
          DONAR
        </button>
      </Link>
      </div>
    </div>;
  }
}

export default Home;
