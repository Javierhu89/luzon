import React, { Component } from "react";
import './Game1.scss';
import SnakeGame from "../snake/SnakeGame";
import { Link } from 'react-router-dom';
class Game1 extends Component {
  render() {
    return <div>
      <SnakeGame />
      <div className="snakegamebotons">
      <Link to={'/'}>
        <button className="home">
          Home
        </button>
      </Link>
      <img className="icono" alt="icono" id="icono" src={process.env.PUBLIC_URL + this.props.location.state.icono} />
    </div>
    </div>
  }
}
export default Game1;
