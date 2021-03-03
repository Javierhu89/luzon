import React, { Component } from "react";
import Game1 from "../Game1/Game1";
import './Game.scss';
import { Link } from 'react-router-dom';
class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       icono: ""
    }
  }
  
  componentDidMount() {
    let icono1=document.getElementById("icono1");
    let icono2=document.getElementById("icono2");
    let icono3=document.getElementById("icono3");
    let icono4=document.getElementById("icono4");
    let icono5=document.getElementById("icono5");
    icono1.addEventListener('click', () => {
      this.setState({'icono': '/assets/img/chico.png' })
      icono1.classList.add('bordes')
      icono2.classList.remove('bordes')
      icono3.classList.remove('bordes')
      icono4.classList.remove('bordes')
      icono5.classList.remove('bordes')
    });
    icono2.addEventListener('click', () => {
      this.setState({'icono': '/assets/img/hombre-de-negocios.png' })
      icono2.classList.add('bordes')
      icono1.classList.remove('bordes')
      icono3.classList.remove('bordes')
      icono4.classList.remove('bordes')
      icono5.classList.remove('bordes')
    });
    icono3.addEventListener('click', () => {
      this.setState({'icono': '/assets/img/jefe.png' })
      icono3.classList.add('bordes')
      icono2.classList.remove('bordes')
      icono1.classList.remove('bordes')
      icono4.classList.remove('bordes')
      icono5.classList.remove('bordes')
    });
    icono4.addEventListener('click', () => {
      this.setState({'icono': '/assets/img/mujer.png' })
      icono4.classList.add('bordes')
      icono2.classList.remove('bordes')
      icono3.classList.remove('bordes')
      icono1.classList.remove('bordes')
      icono5.classList.remove('bordes')
    });
    icono5.addEventListener('click', () => {
      this.setState({'icono': '/assets/img/nina.png' })
      icono5.classList.add('bordes')
      icono2.classList.remove('bordes')
      icono3.classList.remove('bordes')
      icono4.classList.remove('bordes')
      icono1.classList.remove('bordes')
    });
  }
  render() {
    return <><div className="conjuntoiconos">
      <img className="iconos" alt="icono1" id="icono1" src={process.env.PUBLIC_URL + '/assets/img/chico.png'} />
      <img className="iconos" alt="icono2" id="icono2" src={process.env.PUBLIC_URL + '/assets/img/hombre-de-negocios.png'} /> 
      <img className="iconos" alt="icono3" id="icono3" src={process.env.PUBLIC_URL + '/assets/img/jefe.png'} />
      <img className="iconos" alt="icono4" id="icono4" src={process.env.PUBLIC_URL + '/assets/img/mujer.png'} />
      <img className="iconos" alt="icono5" id="icono5" src={process.env.PUBLIC_URL + '/assets/img/nina.png'} />
      </div>
      <div className="botones">
      <Link to={'/'}>
        <button className="home">
          Home
        </button>
      </Link>
      <Link to={{ pathname:'/phase1', state: {iconos:this.state.icono}}}>
        <button className="phase1">
          Jugar Phase1
        </button>
      </Link>
    </div>
    </>
  }
}

export default Game;
