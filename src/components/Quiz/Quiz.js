import React, { Component } from "react";
import './Quiz.scss';
import axios from 'axios';
import Modal from '../Modal/Modal'
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
       Score:null
    }
  }
  corregir = (i) => {
    console.log(`opcion${i}`)
    if (i===2){
      let elemento = document.getElementById(`opcion${i}`);
      elemento.className = 'verde';
      this.setState({'buena':true})
      let value = parseInt(localStorage.getItem('Puntos Acumulados')) + 10;
      localStorage.setItem('Puntos Acumulados', value)
      this.setState({Score: value })
    } else {
      let elemento = document.getElementById(`opcion${i}`);
      elemento.className = 'rojo';
      this.setState({'mala':true})
    } 
  }
//   componentDidMount = () => {
//     axios.get(``)
//     .then(res => {
//       if(this.props.location.state.fase===1){

//     } else if(this.props.location.state.fase===2){

//     } else if(this.props.location.state.fase===3){

//     } else {

//     }
//   })
// }
  toggle = () => {
  this.setState({'active': !this.state.active})
  //this.setState({'solucion': !this.state.solucion})
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


        
        <Modal buena={this.state.buena} toggle2={this.toggle2}>
        <img className='imgQuestion' alt='Signo de Interrogación'src={process.env.PUBLIC_URL + '/assets/img/.png'}></img>
        <p className='ops info'>¡Enhorabuena! Has conseguido {this.state.Score} puntos en esta fase. </p>
        </Modal>
        <Modal mala={this.state.mala} toggle2={this.toggle2}>
        <img className='imgQuestion' alt='Signo de Interrogación'src={process.env.PUBLIC_URL + '/assets/img/.png'}></img>
        <p className='ops info'>Lo sentimos. Esta respuesta no es correcta. Tus puntos actuales son {this.state.Score}.</p>
        </Modal>



        {/* {this.state.solucion?(<Redirect to={{ pathname: '/quiz', state: {fase: 1} }}/>):<></> } */}
      </div>;
    }
}

export default Quiz;
