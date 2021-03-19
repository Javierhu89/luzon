import React , {useState} from 'react';
import { Redirect } from "react-router-dom";
import './Nav2.scss';

class Nav2 extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       redirigir: null,
       imagen: ""
    }
  }
  

  redireccionar = () =>{
    this.setState({'redirigir':'/'})
  }
  redireccionar1 = () =>{
    this.setState({'redirigir':'/donar'})
  }
  redireccionar2 = () =>{
    this.setState({'redirigir':'/game'})
  }

  render() {

  if (this.props.fase===1){
    if(this.props.score<10){

    } else if(10<=this.props.score<18){
      this.setState({'imagen':'1'})
    } else if(18<=this.props.score<27){
      this.setState({'imagen':'2'})
    } else if(27<=this.props.score<36){
      this.setState({'imagen':'3'})
    } else {
      this.setState({'imagen':'4'})
    }
  return (
    <>
    <img className="fijo" src={process.env.PUBLIC_URL + `/assets/img/nav${this.state.imagen}.svg`}></img>
    <div className="iconosNav">
    <div className="home">
    <img className="icons" onClick={ this.redireccionar} src={process.env.PUBLIC_URL + '/assets/img/home.png'}></img><p onClick={this.redireccionar} className="icons">Home</p></div>
    <img className="icons play" onClick={this.redireccionar2} src={process.env.PUBLIC_URL + '/assets/img/play.png'}></img>
    <div className="colaborar">
    <img onClick={this.redireccionar1} className="icons flor" src={process.env.PUBLIC_URL + '/assets/img/crecimiento.png'}></img> <p onClick={this.redireccionar1} className="icons">Colaborar</p>
    </div>
    </div>
    {this.state.redirigir?(<Redirect to={{ pathname: this.state.redirigir }}/>):<></> }
    </>
  );
}
}
}
export default Nav2;