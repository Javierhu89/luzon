import React, { Component } from "react";
import './Donar.scss';
import Nav from "../Nav/Nav";
import Share from "../Share/Share";

class Donar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Puntuacion: parseInt(localStorage.getItem('Puntos Acumulados')) || 0,
       euros: parseInt(localStorage.getItem('Puntos Acumulados'))/10
    }
  }
 
  render() {
    
    return <div style={{ 
      backgroundColor: '#BAC3D7'
    }}>
      <p className="enhorabuena"><span className="modificarcolor">¡Enhorabuena!</span> Aquí tienes la puntuación que has conseguido para ayudar a María:</p>
      <div className="end">
      <img className="trofeo" src={process.env.PUBLIC_URL + '/assets/img/trofeo.png'} alt="Trofeo final"/>
      <div>
        {this.state.Puntuacion===0?<><p className="resultado points">0 Puntos</p><p className="resultado euros">Has conseguido <span className="modificarcolor">0€</span></p></>:<><p className="resultado points">{this.state.Puntuacion} Puntos</p><p className="resultado euros">Has conseguido <span className="modificarcolor">{this.state.euros}€</span></p></>}
      {/* <p className="resultado euros">Has conseguido <span className="modificarcolor">{this.state.euros}€</span></p> */}
      </div>
      </div>
      <p className="enhorabuena punt">Por favor, dona estos {this.state.euros}€ y comparte lo que has conseguido con tus amigos.</p>
      <Share />
      <div className="donacion">
      <p className="enhorabuena punt">Cada donación cuenta para luchar contra la ELA. Contribuye hoy y ayuda a personas como María.</p>
      <form className="PayPal" action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="WJ6QB2Y98RCVL" />
      <input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/es_ES/i/scr/pixel.gif" width="1" height="1" />
      </form>
    <p className="enhorabuena punt org"><a target="_black" className="fundacion" href="https://ffluzon.org/">¿Quieres saber más formas de colabar? Visita la página de la fundación y explora todas las formas en que puedes ayudar.</a></p>
      </div>
    {/* <h4 className="PayPal">Si lo prefieres puedes escanear este código QR desde tu aplicación de PayPal:</h4> <br/>
    <img className="PayPal" src={process.env.PUBLIC_URL + '/assets/img/Código-QR.png'} alt="QR PayPal"/> */}
      <Nav />
    </div>;
  }
}

export default Donar;