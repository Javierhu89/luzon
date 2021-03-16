import React, { Component } from "react";
import './Quiz.scss';
import axios from 'axios';
class Quiz extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       pregunta:null,
       opcion1:null,
       opcion2:null
    }
  }
  componentDidMount = () => {
    axios.get(``)
    .then(res => {
      if(this.props.location.state.fase===1){

    } else if(this.props.location.state.fase===2){

    } else if(this.props.location.state.fase===3){

    } else {

    }
  })
}
  render() {
      return <div>
        <img className='imgQuestion' alt='Signo de Interrogación'src={process.env.PUBLIC_URL + '/assets/img/question.png'}></img>
        <h3 className="pregunta">¿Crees que María puede tener Ela siendo tan joven?</h3>
        <div>
        <p>La ELA sola afecta a personas mayores de 40 años</p>
        </div>
        <div>
        <p>La Ela puede afectar a personas de cualquier edad</p>
        </div>
      </div>;
    }
}

export default Quiz;
