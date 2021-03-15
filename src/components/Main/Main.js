import React, { Component } from "react";
import './Main.scss';
import Header from '../Header/Header';
import { Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       change: null
    }
  }
  

  goToOnboarding = () => {
    this.setState({'change':true})
  }

  render() {
    return (<div style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/img/IntroBack.png'})`,
      backgroundRepeat: 'no-repeat', BackgroundSize: 'cover', position:'absolute',top:0, width:'100%',  height: '100vh'
    }}>
      <Header />
      <div className="introduccion">
      <p className="luzon">La <span className="modificarcolor">Fundación Luzón</span> es una organización independiente, sin ánimo de lucro y dedicada por completo a la mejora de las condiciones con las que viven los pacientes con <span className="modificarcolor">ELA</span> y sus familiares.</p>
      <a href="https://ffluzon.org/" className="externa" target="_blank">Visita nuestra página para saber más.</a>
      <p className="elalife"><span className="modificarcolor">#ELALIFE</span> se inspiró para apoyar la causa y concienciar sobre la enfermedad</p>
      <div className="donjug">
        <button className="siguiente" onClick={this.goToOnboarding}>
          SIGUIENTE
        </button>
      </div>
    </div>
    {this.state.change?(<Redirect to={{ pathname: '/Onboarding' }}/>):<></> }
    </div>
    )
  }
}

export default Main;
