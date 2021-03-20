import React, { Component } from "react";
import './Donar.scss';
import { Link } from 'react-router-dom';
import Nav from "../Nav/Nav";
import Share from "../Share/Share";

class Donar extends Component {

  render() {
    
    return <div style={{ 
      backgroundColor: '#BAC3D7'
    }}>
      <p className="enhorabuena"><span className="modificarcolor">¡Enhorabuena!</span> Aquí tienes la puntuación que has conseguido para ayudar a María:</p>
      <div className="end">
      <img className="trofeo" src={process.env.PUBLIC_URL + '/assets/img/trofeo.png'} alt="Trofeo final"/>
      <p className="resultado">{parseInt(localStorage.getItem('Puntos Acumulados'))} Puntos</p>
      </div>
      <p className="enhorabuena punt">Comparte lo que has conseguido con tus amigos e invítalos a jugar.</p>
      <Share />
    <form className="PayPal" action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="9GQMEW4MYPY8Y" />
      <input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="botón" border="0" src="https://www.paypal.com/es_ES/i/scr/pixel.gif" width="1" height="1" />
    </form>
    <br/>
    {/* <h4 className="PayPal">Si lo prefieres puedes escanear este código QR desde tu aplicación de PayPal:</h4> <br/>
    <img className="PayPal" src={process.env.PUBLIC_URL + '/assets/img/Código-QR.png'} alt="QR PayPal"/> */}
      <Nav />
    </div>;
  }
}

export default Donar;