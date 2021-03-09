import React from 'react'

function GameOver(props) {
  return (
    <div
      id='GameBoard'
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}>
      <div id='GameOver' style={{ fontSize: props.width / 15 }}>
        <div id='GameOverText'><b>GAME OVER</b></div>
        <div><b>Your score: {props.score}</b></div>
        <div>
          {props.newHighScore ? <b>'New local '</b> :<b> 'Local '</b>}<b>high score:{' '}
          {props.highScore} </b>
        </div>
        <div id='PressSpaceText'><b>Press Space to restart</b></div>
      </div>
    </div>
  )
}

export default GameOver
