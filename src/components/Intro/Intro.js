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
    return <div className='introductorio' onClick={this.pasarIntro}>
      <img className="intro" src={process.env.PUBLIC_URL + '/assets/img/Intro.png'}></img>
      {this.state.pagina?(<Redirect to={{ pathname: '/home' }}/>):<></> }
      <div>
      <img className="bajera" src={process.env.PUBLIC_URL + '/assets/img/portada.svg'}></img>
        </div>
      </div>;
  }
}

export default Intro;
