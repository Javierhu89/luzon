import React, { Component } from "react";
import './Quiz.scss';
import axios from 'axios';
import Modal from '../Modal/Modal'
import ModalBuena from "../ModalBuena/ModalBuena";
import ModalMala from "../ModalMala/ModalMala";
import { Redirect } from "react-router-dom";
class Quiz extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       pregunta:null,
       opcion1:null,
       opcion2:null,
       active: true,
       buena:null,
       mala:null,
       Score:null, 
       solucion:null
    }
  }
  corregir = (i) => {
    console.log(`opcion${i}`)
    if (i===2){
      let elemento = document.getElementById(`opcion${i}`);
      elemento.className = 'verde';
      this.setState({'buena':true})
      let value = parseInt(localStorage.getItem('Puntos Acumulados')) + 10;
      if(value>20){
        localStorage.setItem('Puntos Acumulados', 20)
      } else{
        localStorage.setItem('Puntos Acumulados', value)
      }
      this.setState({Score: value })
    } else {
      let elemento = document.getElementById(`opcion${i}`);
      elemento.className = 'rojo';
      let value = parseInt(localStorage.getItem('Puntos Acumulados'))
      this.setState({Score: value })
      this.setState({'mala':true})
    } 
  }
//componentDidMount = () => {
//     axios.get(``)
//     .then(res => {
 //    if(this.props.location.state.fase===1){
      
 //    } else if(this.props.location.state.fase===2){

//     } else if(this.props.location.state.fase===3){

//     } else {

//     }
//   })
// }
toggle = () => {
  this.setState({'active': !this.state.active})
  //this.setState({'solucion': !this.state.solucion})
}
toggle2 = () => {
  this.setState({'buena': !this.state.buena})
  this.setState({'solucion': !this.state.solucion})
}
toggle3= () => {
  this.setState({'mala': !this.state.mala})
  this.setState({'solucion': !this.state.solucion})
}

  render() {
    const styleModal = {
      position: "relative",
      top: '25%'
    }
      return <div>
        <img className='imgQuestion' alt='Signo de Interrogación'src={process.env.PUBLIC_URL + '/assets/img/question.png'}></img>
        <h3 className="pregunta">¿Crees que María puede tener ELA siendo tan joven?</h3>
        <div className='opciones' id='opcion1' onClick={() => this.corregir(1)}>
        <p className='respuestas'>La ELA sola afecta a personas mayores de 40 años</p>
        </div>
        <div className='opciones' id='opcion2' onClick={() => this.corregir (2)}>
        <p className='respuestas'>La Ela puede afectar a personas de cualquier edad</p>
        </div>
        <Modal active={this.state.active} toggle={this.toggle}>
        <p className='ops info'>Basándonos en la información que nos ha dado María, ayúdanos a responder la siguiente pregunta.</p>
        <button className="siguiente play pregunta" onClick={this.toggle}>
          ¡Ir a la Pregunta!
        </button>
        </Modal>

        <ModalBuena buena={this.state.buena} toggle2={this.toggle2}>
        <img className='results' alt='Celebración'src={process.env.PUBLIC_URL + '/assets/img/celebracion.png'}></img>
        <p className='presult'>¡Enhorabuena!</p>
        <p className='presult inferior'>Has conseguido {this.state.Score} puntos en esta fase. </p>
        </ModalBuena>

        <ModalMala mala={this.state.mala} toggle3={this.toggle3}>
        <img className='results' alt='¡Has fallado!'src={process.env.PUBLIC_URL + '/assets/img/incorrecto.png'}></img>
        <p className='presult'>Lo sentimos.</p>
        <p className='presult inferior'>Esta respuesta no es correcta. Tus puntos actuales son {this.state.Score}.</p>
        </ModalMala>

        {this.state.solucion?(<Redirect to={{ pathname: '/solucion', state: {fase: this.props.location.state.fase} }}/>):<></> }
      </div>;
    }
}

export default Quiz;
