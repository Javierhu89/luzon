import React, { Component } from "react";
import './Main.scss';
import { Link } from 'react-router-dom';
class Main extends Component {
  render() {
    return <div>
      <Link to={'/game'}>
        <button id="jugar">
          ¿Quieres elegir jugador y comenzar a jugar?
        </button>
      </Link>
      <Link to={'/donar'}>
        <button id="donar">
          Donar!
        </button>
      </Link>
    </div>;
  }
}

export default Main;
