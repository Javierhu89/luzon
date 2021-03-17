import React, { Component } from "react";
import './Solucion.scss';
import { Redirect } from "react-router-dom";
class Solucion extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      maria: false
    }
  }
  goToMaria = () => {
    this.setState({'maria':true})
  }
  render() {
    if(this.props.location.state===undefined){
    return (
    <Redirect to={{ pathname: '/game' }}/>
    )
  }
     else {
       if (this.props.location.state.fase===1){
        return <div onClick={this.goToMaria} style={{ 
        backgroundColor: '#BAC3D7'
    }}>
      <div className="title">
      <h1 className="h1title">PREVENCIÓN</h1>
      <p className="text"> Las causas que originan la ELA son mayoritariamente desconocidas. En esta fase es importante identificar, mediante estudios genéticos, en familias con varias personas con la ELA.</p>
      <p className="text">La ELA puede afectar a personas de cualquier edad, sean niños, jóvenes o adultos</p>
      </div>
      {this.state.maria?(<Redirect to={{ pathname: '/maria', state: {fase: 2} }}/>):<></> }
      </div>
    } else if(this.props.location.state.fase===2){
        return <div onClick={this.goToMaria} style={{ 
        backgroundColor: '#BAC3D7'
        }}>
        <div className="title">
        <h1 className="h1title">PREDIAGNÓSTICO</h1>
        <p className="text"> En esta fase, los síntomas iniciales de la Esclerosis Lateral Amiotrófica, que aparecen gradualmente, son muy inespecíficos y es habitual que se presente con formas inusuales, por lo que son fácilmente confundidos con los de otras enfermedades, como los de la Esclerosis Múltiple.</p>
        </div>
        {this.state.maria?(<Redirect to={{ pathname: '/maria', state: {fase: 3} }}/>):<></> }
        </div>
    } else if(this.props.location.state.fase===3){
        return <div onClick={this.goToMaria} style={{ 
        backgroundColor: '#BAC3D7'
        }}>
        <div className="title">
        <h1 className="h1title">DIAGNÓSTICO</h1>
        <p className="text"> La ELA no tiene una prueba específica. El proceso para llegar a diagnosticar la ELA es difícil y en muchos casos suele comenzar en el médico de Atención Primaria. Éste realizará un exámen físico y redactará una historia detallada con los signos y síntomas observados. Tras un estudio del informe, y si el médico sospecha, derivará al paciente al servicio de Neurología.</p>
        </div>
        {this.state.maria?(<Redirect to={{ pathname: '/maria', state: {fase: 4} }}/>):<></> }
        </div>
    } else {
        return <div onClick={this.goToMaria} style={{ 
        backgroundColor: '#BAC3D7'
      }}>
        <div className="title">
        <h1 className="prevencion">EVOLUCIÓN</h1>
        <p className="text"> En nuestro país, algunos de los costes directos de tipo médico están generalmente cubiertos por el Sistema Nacional de Salud o los seguros de salud privados, mientras que otros costes recaen directamente en la persona y en sus familias, llegando a superar en algunos casos los 50.000€. </p>
        </div>
        {this.state.maria?(<Redirect to={{ pathname: '/colaborar'}}/>):<></> }
        </div>
        }}
}
}

export default Solucion;
