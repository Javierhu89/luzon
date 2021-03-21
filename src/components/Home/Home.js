import React, { Component } from "react";
import Header from "../Header/Header";
import './Home.scss';
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      traslado:null
    }
  }
  
  goToJugar = () =>{
      this.setState({'traslado':'/onboarding'})
    }
  goToDonar = () => {
    this.setState({'traslado':'/Donar'})
  }
  render() {
    return <div style={{ 
      backgroundColor: '#BAC3D7'
    }}>
      <Header />
      <h1 className="titulo">Sobre la ELA</h1>
      <img alt="Lupa sujetada por dos personas" className="lupa" src={process.env.PUBLIC_URL + '/assets/img/lupa.png'}></img>
      <p className="sobre">La ELA (Esclerosis Lateral Amiotrófica) es una enfermedad del sistema nervioso central que produce una degeneración progresiva de las neuronas motoras </p>
      <p className="sobre">Es una enfermedad sin tratamiento curativo, con una esperanza de vida entre 3 y 5 años.</p>
      <p className="sobre">La <span className="modificarcolor"><a targer="_blank" className="fundacion" href="https://ffluzon.org/">Fundación Luzón</a></span> es una organización independiente, sin ánimo de lucro y dedicada por completo a la mejora de las condiciones con las que viven los pacientes con ELA y sus familiares.</p>
      <p className="sobre final"><span className="modificarcolor">#ELALIFE</span> se inspiró para apoyar la causa y concienciar sobre la enfermedad.</p>
      <div className="donjug">
        <button className="siguiente play step" onClick={this.goToJugar}>
          JUGAR
        </button>
        <button className="siguiente play step" onClick={this.goToDonar}>
          DONAR
        </button>
      </div>
      {this.state.traslado?(<Redirect to={{ pathname: this.state.traslado }}/>):<></> }
    </div>;
  }
}

export default Home;
