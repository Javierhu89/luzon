import React, { Component } from "react";
import './Quiz.scss';
import data from '../../data'
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
       solucion:null,
       result:null
    }
  }
  corregir = (i) => {
    if (i===this.state.result){
      let elemento = document.getElementById(`opcion${i}`);
      elemento.className = 'verde';
      this.setState({'buena':true})
      let value = parseInt(localStorage.getItem('Puntos Acumulados')) + 20;
      localStorage.setItem('Puntos Acumulados', value)
      this.setState({Score: value })
    } else {
      let elemento = document.getElementById(`opcion${i}`);
      elemento.className = 'rojo';
      let value = parseInt(localStorage.getItem('Puntos Acumulados'))
      this.setState({Score: value })
      this.setState({'mala':true})
    } 
  }
componentDidMount = () => {
    if(this.props.location.state===undefined){
      return (
        <Redirect to={{ pathname: '/game' }}/>
      )
    }
    else {
      if(this.props.location.state.fase===1){
      let j = Math.floor(Math.random() * (5 - 0)) + 0;
      this.setState({'pregunta':data[j][0]})
      let k = Math.floor(Math.random() * (3 - 1)) + 1;
      this.setState({'opcion1':data[j][k]})
      if (k===1){
        this.setState({'opcion2':data[j][2]})
        this.setState({'result': 1})
      } else {
        this.setState({'opcion2':data[j][1]})
        this.setState({'result': 2})
      }
    } else if(this.props.location.state.fase===2){
      let j = Math.floor(Math.random() * (10 - 5)) + 5;
      this.setState({'pregunta':data[j][0]})
      let k = Math.floor(Math.random() * (3 - 1)) + 1;
      this.setState({'opcion1':data[j][k]})
      if (k===1){
        this.setState({'opcion2':data[j][2]})
        this.setState({'result': 1})
      } else {
        this.setState({'opcion2':data[j][1]})
        this.setState({'result': 2})
      }
    } else if(this.props.location.state.fase===3){
      let j = Math.floor(Math.random() * (15 - 10)) + 10;
      this.setState({'pregunta':data[j][0]})
      let k = Math.floor(Math.random() * (3 - 1)) + 1;
      this.setState({'opcion1':data[j][k]})
      if (k===1){
        this.setState({'opcion2':data[j][2]})
        this.setState({'result': 1})
      } else {
        this.setState({'opcion2':data[j][1]})
        this.setState({'result': 2})
      }
    } else {
      let j = Math.floor(Math.random() * (20 - 15)) + 15;
      this.setState({'pregunta':data[j][0]})
      let k = Math.floor(Math.random() * (3 - 1)) + 1;
      this.setState({'opcion1':data[j][k]})
      if (k===1){
        this.setState({'opcion2':data[j][2]})
        this.setState({'result': 1})
      } else {
        this.setState({'opcion2':data[j][1]})
        this.setState({'result': 2})
      }
    }
  }}

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
    if(this.props.location.state===undefined){
      return (
      <Redirect to={{ pathname: '/game' }}/>
      )
    } else {
    const styleModal = {
      position: "relative",
      top: '25%'
    }
    if(this.props.location.state===undefined){
      return (
      <Redirect to={{ pathname: '/game' }}/>
      )
    } else {
      return <div>
        <img className='imgQuestion' alt='Signo de Interrogación'src={process.env.PUBLIC_URL + '/assets/img/question.png'}></img>
        <h3 className="pregunta">{this.state.pregunta}</h3>
        <div className='opciones' id='opcion1' onClick={() => this.corregir(1)}>
        <p className='respuestas'>{this.state.opcion1}</p>
        </div>
        <div className='opciones' id='opcion2' onClick={() => this.corregir (2)}>
        <p className='respuestas'>{this.state.opcion2}</p>
        </div>
        <Modal active={this.state.active} toggle={this.toggle} style={{styleModal}}>
        <p className='ops info'>Basándonos en la información que nos ha dado María, ayúdanos a responder la siguiente pregunta.</p>
        <button className="siguiente play pregunta" onClick={this.toggle}>
          ¡PREGUNTA!
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
    }}}
}

export default Quiz;
