import React, { Component } from "react";
import './Donar.scss';
import { Link } from 'react-router-dom';

class Donar extends Component {

  render() {
    return <div>
      <br/>
    <form className="PayPal" action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="9GQMEW4MYPY8Y" />
      <input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="botón" border="0" src="https://www.paypal.com/es_ES/i/scr/pixel.gif" width="1" height="1" />
    </form>
    <br/>
    <h4 className="PayPal">Si lo prefieres puedes escanear este código QR desde tu aplicación de PayPal:</h4> <br/>
    <img className="PayPal" src={process.env.PUBLIC_URL + '/assets/img/Código-QR.png'} alt="QR PayPal"/>
    <Link to={'/'}>
        <button className="home">
          Home
        </button>
      </Link>
    </div>;
  }
}

export default Donar;