import React, { Component } from "react";
import './Intro.scss';
import { Redirect } from "react-router-dom";
class Intro extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pagina: null
    }
  }
  
 
  pasarIntro = () =>{
    this.setState({'pagina':true})
  }
  render() {
    return <div style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/img/IntroBack.png'})`,
      backgroundRepeat: 'no-repeat', BackgroundSize: 'cover', position:'absolute',top:0, width:'100%'
    }} onClick={this.pasarIntro}>
      <img className="intro" src={process.env.PUBLIC_URL + '/assets/img/Intro.png'}></img>
      {this.state.pagina?(<Redirect to={{ pathname: '/luzon' }}/>):<></> }
      </div>;
  }
}

export default Intro;
