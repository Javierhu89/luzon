import React, { Component } from "react";
import './Header2.scss';
class Header2 extends Component {
  render() {
    return <div>
      <img className="logo" src={process.env.PUBLIC_URL + '/assets/img/fundacion-luzon.jpg'} />
      <h1 className="bienvenido">Bienvenid@ a</h1>
      <h1 className="hashtag">#ELALIFE</h1>
    </div>;
  }
}

export default Header2;
