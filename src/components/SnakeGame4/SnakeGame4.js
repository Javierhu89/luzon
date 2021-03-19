import React from 'react'
import './SnakeGame4.scss'
import Nav from '../Nav/Nav'
import { Redirect } from "react-router-dom";
import Modal from '../Modal/Modal'
// color serpiente y color manzana
// snakeColor: this.getRandomColor(),
// appleColor: this.getRandomColor(),
class SnakeGame4 extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    
    this.state = {
      width: 0,
      height: 0,
      blockWidth: 0,
      blockHeight: 0,
      //velocidad a mayor número, más lento
      gameLoopTimeout: 80,
      timeoutId: 0,
      startSnakeSize: 0,
      snake: [],
      apple: {},
      rock:[{}],
      direction: 'right',
      directionChanged: false,
      isGameOver: false,
      Score: parseInt(localStorage.getItem('Puntos Acumulados')),
      numDin:0,
      active: false,
      quiz: false,
    }
  }
  intervalID = 0;
  componentDidMount() {
    this.initGame()
    //ahora está keydown mirar con click para mobile
    window.addEventListener('keydown', this.handleKeyDown)
    this.gameLoop()
    this.intervalID = setInterval(this.cambiarSaco, 3000)
    console.log("ahora")
  }
  
  initGame() {
    // Game size initialization
    let percentageWidth = this.props.percentageWidth || 95 // Con el segundo valor tocas el tamaño de la pantalla
    let width =
      document.getElementById('GameBoard').parentElement.offsetWidth *
      (percentageWidth / 100)
    width -= width % 30
    if (width < 30) width = 30
    let height = (width / 2) * 2
    let blockWidth = width / 20
    let blockHeight = height / 20

    // snake initialization
    let startSnakeSize = this.props.startSnakeSize || 4
    let snake = []
    let Xpos = width / 2
    let Ypos = height / 2
    let snakeHead = { Xpos: width / 2, Ypos: height / 2 }
    snake.push(snakeHead)
    for (let i = 1; i < startSnakeSize; i++) {
      Xpos -= blockWidth
      let snakePart = { Xpos: Xpos, Ypos: Ypos }
      snake.push(snakePart)
    }
    let rockXpos =
      Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
      blockWidth
    let rockYpos =
      Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
      blockHeight
    while (rockYpos === snake[0].Ypos) {
      rockYpos =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
    }
    let rockXpos1 =
      Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
      blockWidth
    let rockYpos1 =
      Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
      blockHeight
    while (rockYpos1 === snake[0].Ypos || rockYpos === rockYpos1) {
      rockYpos1 =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
    }

    // apple position initialization
    //para la del dinero, que aparezcan y desaparezcan random y sean amarillos
    let appleXpos =
      Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
      blockWidth
    let appleYpos =
      Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
      blockHeight
    while (appleYpos === snake[0].Ypos) {
      appleYpos =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
    }
    this.setState({
      width,
      height,
      blockWidth,
      blockHeight,
      startSnakeSize,
      snake,
      apple: { Xpos: appleXpos, Ypos: appleYpos },
      rock: [{Xpos: rockXpos, Ypos:rockYpos}, {Xpos: rockXpos1, Ypos:rockYpos1}]
    })
  }
  gameLoop() {
    let timeoutId = setTimeout(() => {
      if (!this.state.isGameOver) {
        this.moveSnake()
        this.tryToEatSnake()
        this.tryToEatApple()
        this.tryToEatRock()
        this.setState({ directionChanged: false })
      }

      this.gameLoop()
    }, this.state.gameLoopTimeout)

    this.setState({ timeoutId })
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId)
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  getRandomColor() {
    let hexa = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) color += hexa[Math.floor(Math.random() * 16)]
    return color
  }

  moveSnake() {
    let snake = this.state.snake
    let previousPartX = this.state.snake[0].Xpos
    let previousPartY = this.state.snake[0].Ypos
    let tmpPartX = previousPartX
    let tmpPartY = previousPartY
    this.moveHead()
    for (let i = 1; i < snake.length; i++) {
      tmpPartX = snake[i].Xpos
      tmpPartY = snake[i].Ypos
      snake[i].Xpos = previousPartX
      snake[i].Ypos = previousPartY
      previousPartX = tmpPartX
      previousPartY = tmpPartY
    }
    this.setState({ snake })
  }
  tryToEatRock() {
    let snake = this.state.snake
    let rock = this.state.rock
    for(let i=0;i<rock.length;i++){
      if (snake[0].Xpos === rock[i].Xpos && snake[0].Ypos === rock[i].Ypos) {
        this.setState({ isGameOver: true })
        clearInterval(this.intervalID)
        this.setState({'active': !this.state.active})
    }
  }}
  cambiarSaco = () => {

    let apple = this.state.apple
    let width = this.state.width
    let height = this.state.height
    let blockHeight = this.state.blockHeight
    let blockWidth = this.state.blockWidth
    apple.Xpos =
        Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth
      apple.Ypos =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
      while (this.isAppleOnSnake(apple.Xpos, apple.Ypos)) {
        apple.Xpos =
          Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
          blockWidth
        apple.Ypos =
          Math.floor(
            Math.random() * ((height - blockHeight) / blockHeight + 1)
          ) * blockHeight
      }
      this.setState({
        apple
      })
  }
  tryToEatApple() {
    let snake = this.state.snake
    let apple = this.state.apple
    let rock = this.state.rock
    let numDin = this.state.numDin

    // if the snake's head is on an apple
    if (snake[0].Xpos === apple.Xpos && snake[0].Ypos === apple.Ypos) {
      let width = this.state.width
      let height = this.state.height
      let blockWidth = this.state.blockWidth
      let blockHeight = this.state.blockHeight
      let newTail = { Xpos: apple.Xpos, Ypos: apple.Ypos }
      let gameLoopTimeout = this.state.gameLoopTimeout
      let Score = this.state.Score;
      // increase snake size
      snake.push(newTail)

      let auxiliar = {Xpos:0,Ypos:0}
      auxiliar.Xpos =
        Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth
      auxiliar.Ypos =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
      while (this.isRockOnSnake(auxiliar.Xpos, auxiliar.Ypos)) {
      auxiliar.Xpos =
        Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth
      auxiliar.Ypos =
        Math.floor(
        Math.random() * ((height - blockHeight) / blockHeight + 1)
      ) * blockHeight
      }
      rock.push(auxiliar); 
      // create another apple
      apple.Xpos =
        Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth
      apple.Ypos =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
      while (this.isAppleOnSnake(apple.Xpos, apple.Ypos)) {
        apple.Xpos =
          Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
          blockWidth
        apple.Ypos =
          Math.floor(
            Math.random() * ((height - blockHeight) / blockHeight + 1)
          ) * blockHeight
      }
           

      // increment high score if needed
        Score = Score + 3;
        localStorage.setItem('Puntos Acumulados', Score)
      // decrease the game loop timeout
      if (gameLoopTimeout > 25) gameLoopTimeout -= 0.5

      this.setState({
        snake,
        apple,
        rock,
        Score,
        gameLoopTimeout,
        numDin: numDin +1
      })
      if(this.state.numDin===21){
        this.setState({ isGameOver: true })
        clearInterval(this.intervalID)
        this.setState({'active': !this.state.active})
      }
    }
  }
  tryToEatSnake() {
    let snake = this.state.snake

    for (let i = 1; i < snake.length; i++) {
      if (snake[0].Xpos === snake[i].Xpos && snake[0].Ypos === snake[i].Ypos){
        this.setState({ isGameOver: true })
        clearInterval(this.intervalID)
        console.log("----")
        this.setState({'active': !this.state.active})
      }
    }
  }
  isRockOnSnake(rockXpos, rockYpos) {
    let snake = this.state.snake
    for (let i = 0; i < snake.length; i++) {
      if (rockXpos === snake[i].Xpos && rockYpos === snake[i].Ypos)
        return true
    } // ojo con rockXpos === snake[i].Xpos && 
    return false
  }

  isAppleOnSnake(appleXpos, appleYpos) {
    let snake = this.state.snake
    let rock = this.state.rock
    for (let i = 0; i < snake.length; i++) {
      if (appleXpos === snake[i].Xpos && appleYpos === snake[i].Ypos){
        return true
      }}
    for (let j=0; j< rock.length; j++) {
      if (appleXpos === rock[j].Xpos && appleYpos === rock[j].Ypos){
        return true
      }
    }          
    return false
  }

  moveHead() {
    switch (this.state.direction) {
      case 'left':
        this.moveHeadLeft()
        break
      case 'up':
        this.moveHeadUp()
        break
      case 'right':
        this.moveHeadRight()
        break
      default:
        this.moveHeadDown()
    }
  }

  moveHeadLeft() {
    let width = this.state.width
    let blockWidth = this.state.blockWidth
    let snake = this.state.snake
    snake[0].Xpos =
      snake[0].Xpos <= 0 ? width - blockWidth : snake[0].Xpos - blockWidth
    this.setState({ snake })
  }

  moveHeadUp() {
    let height = this.state.height
    let blockHeight = this.state.blockHeight
    let snake = this.state.snake
    snake[0].Ypos =
      snake[0].Ypos <= 0 ? height - blockHeight : snake[0].Ypos - blockHeight
    this.setState({ snake })
  }

  moveHeadRight() {
    let width = this.state.width
    let blockWidth = this.state.blockWidth
    let snake = this.state.snake
    snake[0].Xpos =
      snake[0].Xpos >= width - blockWidth ? 0 : snake[0].Xpos + blockWidth
    this.setState({ snake })
  }

  moveHeadDown() {
    let height = this.state.height
    let blockHeight = this.state.blockHeight
    let snake = this.state.snake
    snake[0].Ypos =
      snake[0].Ypos >= height - blockHeight ? 0 : snake[0].Ypos + blockHeight
    this.setState({ snake })
  }

  handleKeyDown(event) {
    // if spacebar is pressed to run a new game
    //TO-DO: score > X 
    if (this.state.directionChanged) return
//teclas - números, asignar clicks a diferentes teclas
    switch (event.keyCode) {
      case 37:
      case 65:
        this.goLeft()
        break
      case 38:
      case 87:
        this.goUp()
        break
      case 39:
      case 68:
        this.goRight()
        break
      case 40:
      case 83:
        this.goDown()
        break
      default:
    }
    this.setState({ directionChanged: true })
  }

  goLeft() {
    let newDirection = this.state.direction === 'right' ? 'right' : 'left'
    this.setState({ direction: newDirection })
  }

  goUp() {
    let newDirection = this.state.direction === 'down' ? 'down' : 'up'
    this.setState({ direction: newDirection })
  }

  goRight() {
    let newDirection = this.state.direction === 'left' ? 'left' : 'right'
    this.setState({ direction: newDirection })
  }

  goDown() {
    let newDirection = this.state.direction === 'up' ? 'up' : 'down'
    this.setState({ direction: newDirection })
  }
  toggle = () => {
    this.setState({'active': !this.state.active})
    this.setState({'quiz': !this.state.quiz})
  }
  render() {
    const styleModal = {
      position: "relative",
      top: '30%'
    }
    // Game over
      if (this.state.isGameOver && this.state.numDin ===21) {
      return ( <div>
        <Modal active={this.state.active} toggle={this.toggle}>
        <p className='ops'>¡Felicidades! Has pasado el reto y has ganado 21 puntos.</p>
        <img src={process.env.PUBLIC_URL + 'assets/img/puntos.png'} alt="Imagen de puntos"></img>
        </Modal>
        {this.state.quiz?(<Redirect to={{ pathname: '/quiz', state: {fase: 4}}}/>):<></> }
        </div>
      )
    } else if (this.state.isGameOver && this.state.numDin<21){
      return ( <div>
        <Modal active={this.state.active} toggle={this.toggle}>
        <p className='ops'>¡Oops!</p>
        <p className='chocado'>Te has chocado.</p>
        <p>Has acumulado: {this.state.Score} puntos.</p>
        <img src={process.env.PUBLIC_URL + 'assets/img/puntos.png'} alt="Imagen de puntos"></img>
        </Modal>
        {this.state.quiz?(<Redirect to={{ pathname: '/quiz', state: {fase: 4} }}/>):<></> }
        </div>
      )
    }
    return ( <div>
      <div
        id='GameBoard'
        style={{
          width: this.state.width,
          height: this.state.height,
          borderWidth: this.state.width / 50,
        }}>
        {this.state.snake.map((snakePart, index) => {
          if(index!=0){
            return (
            <img alt ='Papeles logrados'
              key={index}
              className='Block'
              style={{
                width: this.state.blockWidth,
                height: this.state.blockHeight,
                left: snakePart.Xpos,
                top: snakePart.Ypos,
                // background: this.state.snakeColor,
              }} src={process.env.PUBLIC_URL + 'assets/img/dinero.png'}
            />
            )} else {
              return (
                <img alt='Personaje Corriendo'
                  key={index}
                  className='Block'
                  style={{
                    width: this.state.blockWidth,
                    height: this.state.blockHeight,
                    left: snakePart.Xpos,
                    top: snakePart.Ypos,
                    // background: this.state.snakeColor,
                  }} src={process.env.PUBLIC_URL + '/assets/img/ninja.png'}
                />
              )
            }
        })}
        <img className='Block' alt='Icono de Dinero'
          style={{
            width: this.state.blockWidth,
            height: this.state.blockHeight,
            left: this.state.apple.Xpos,
            top: this.state.apple.Ypos,
            background: 'white',
          }} src={process.env.PUBLIC_URL + '/assets/img/dinero.png'} />
    {this.state.rock? this.state.rock.map( (item,i) => {return (<img key={i} alt='Ladrillos' className='Block'
          style={{
            width: this.state.blockWidth,
            height: this.state.blockHeight,
            left: this.state.rock[i].Xpos,
            top: this.state.rock[i].Ypos,
          }} src={process.env.PUBLIC_URL + 'assets/img/ladrillo.png'} />)}): <></>}
      <div id='Score' style={{ fontSize: this.state.width / 20 }}>
          <h3 className='acumulados'>Puntos Acumulados: {this.state.Score} </h3>
        </div>

      </div><br/><br/><br/>
      <div className="botones">
          <img onClick={()=>this.goUp()} className="flecha1" alt="flechaArr" id="flechaarr" src={process.env.PUBLIC_URL + '/assets/img/FlechaArr.png'} />
          <img onClick={()=>this.goLeft()} className="flecha2" alt="flechaizq" id="flechaizq" src={process.env.PUBLIC_URL + '/assets/img/FlechaIzq.png'} />
          <img onClick={()=>this.goRight()} className="flecha3" alt="flechader" id="flechader" src={process.env.PUBLIC_URL + '/assets/img/FlechaDer.png'} />
          <img onClick={()=>this.goDown()} className="flecha4" alt="flechaAbaj" id="flechaabaj" src={process.env.PUBLIC_URL + '/assets/img/FlechaAbaj.png'} />
      </div>
      <Nav />
      {this.state.quiz?(<Redirect to={{ pathname: '/quiz' }}/>):<></> }
      </div>
    )
  }
}

export default SnakeGame4;