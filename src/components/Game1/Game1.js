import React, { Component } from "react";
import './Game1.scss';
import SnakeGame from "../snake/SnakeGame";
class Game1 extends Component {
  render() {
    return <div>
      <SnakeGame />
      <div className="botones">
        <button>↑</button>
        <button>→</button>
        <button>←</button>
        <button>↑</button>
      </div>
    </div>;
  }
}

export default Game1;
