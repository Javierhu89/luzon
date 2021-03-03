import React, { Component } from "react";
import './Game1.scss';
import SnakeGame from "../snake/SnakeGame";
import { Link } from 'react-router-dom';
class Game1 extends Component {
  render() {
    return <div>
      <SnakeGame />
      <Link to={'/'}>
        <button className="home">
          Home
        </button>
      </Link>
    </div>;
  }
}

export default Game1;
