import React from 'react'
import '../SnakeGame4/SnakeGame4.scss'
import { Redirect } from "react-router-dom";
import Modal from '../Modal/Modal'
// color serpiente y color manzana
// snakeColor: this.getRandomColor(),
// appleColor: this.getRandomColor(),
class SnakeGame extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    localStorage.setItem('Puntos Acumulados', 0)
    this.state = {
      width: 0,
      height: 0,
      blockWidth: 0,
      blockHeight: 0,
      //velocidad a mayor número, más lento
      gameLoopTimeout: 120,
      timeoutId: 0,
      startSnakeSize: 0,
      snake: [],
      apple: {},
      rock:[{}],
      direction: 'right',
      directionChanged: false,
      isGameOver: false,
      snakeColor: this.props.snakeColor || this.getRandomColor(),
      appleColor: this.props.appleColor  || this.getRandomColor(),
      Score: 0,
      numInfo:0, 
      active: false,
      quiz: false,
      imagen: ""
    }
  }
  componentDidMount() {
    this.initGame()
    //ahora está keydown mirar con click para mobile
    window.addEventListener('keydown', this.handleKeyDown)
    this.gameLoop()
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
    let startSnakeSize = this.props.startSnakeSize || 1
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
    while (appleYpos === snake[0].Ypos || (appleYpos=== rockYpos && appleXpos===rockXpos) || (appleYpos===rockYpos1 && appleXpos===rockXpos1 )){
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
      this.setState({'active': !this.state.active})

    }
  }}
  tryToEatApple() {
    let snake = this.state.snake
    let apple = this.state.apple
    let rock = this.state.rock
    let numInfo = this.state.numInfo

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
        Score = Score + 3
      if(Score>10&&Score<18){
        this.setState({'imagen':'1'})
      } else if(Score>18&&Score<27){
        this.setState({'imagen':'2'})
      } else if(Score>27&&Score<36){
        this.setState({'imagen':'3'})
      } else if (Score===36) {
        this.setState({'imagen':'4'})
      }
        localStorage.setItem('Puntos Acumulados', Score)
      // decrease the game loop timeout
      if (gameLoopTimeout > 25) gameLoopTimeout -= 0.5

      this.setState({
        snake,
        apple,
        rock,
        Score,
        gameLoopTimeout,
        numInfo: numInfo +1
      })
      if(this.state.numInfo===12){
        this.setState({ isGameOver: true })
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
  redireccionar = () =>{
    this.setState({'redirigir':'/'})
  }
  redireccionar1 = () =>{
    this.setState({'redirigir':'/donar'})
  }
  render() {
    const styleModal = {
      position: "relative",
      top: '15%'
    }
    // Game over
    if (this.state.isGameOver && this.state.numInfo ===12) {
      return ( <div>
        <div className="gameboy agrandar" id="GameBoy">
        <div className="screen-area agrande"> 
        <canvas className="display pantalla" id="mainCanvas"></canvas>
        <div className="label">
        <div className="title">ELA </div>
        <div className="subtitle">
          <span className="letra">L</span>
          <span className="letra">I</span>
       <span className="letra">F</span>
       <span className="letra">E</span>
        </div>
      </div> 
      <div className="controls extra">
      <div className="dpad">
        <div className="up"><i className="fa fa-caret-up" onClick={()=>this.goUp()}></i></div>
        <div className="right"><i className="fa fa-caret-right" onClick={()=>this.goRight()}></i></div>
        <div className="down"><i className="fa fa-caret-down" onClick={()=>this.goDown()}></i></div>
        <div className="left"><i className="fa fa-caret-left" onClick={()=>this.goLeft()}></i></div>
        <div className="middle"></div>
      </div>
      </div>
        <Modal active={this.state.active} toggle={this.toggle} style={{styleModal}}>
        <p className='ops'>¡Felicidades! Has pasado el reto y has ganado {this.state.Score} puntos.</p>
        <img className='feliz' src={process.env.PUBLIC_URL + 'assets/img/puntos.png'} alt="¡Logrado!"></img>
        </Modal>
        <img className="fijo" src={process.env.PUBLIC_URL + `/assets/img/nav${this.state.imagen}.svg`}></img>
        <div className="iconosNav">
        <div className="home">
        <img className="icons" onClick={ this.redireccionar} src={process.env.PUBLIC_URL + '/assets/img/home.png'}></img><p onClick={this.redireccionar} className="icons">Home</p></div>
        <p className="puntuacion">{this.state.Score}</p>
        <div className="colaborar">
        <img onClick={this.redireccionar1} className="icons flor" src={process.env.PUBLIC_URL + '/assets/img/crecimiento.png'}></img> <p onClick={this.redireccionar1} className="icons">Colaborar</p>
        </div>
        </div>
        </div>
        </div>
        {this.state.quiz?(<Redirect to={{ pathname: '/quiz', state: {fase: 1}}}/>):<></> }
        </div>
      )
    } else if (this.state.isGameOver && this.state.numInfo <12){
      return ( <div>
        <div className="gameboy agrandar" id="GameBoy">
        <div className="screen-area agrande"> 
        <canvas className="display pantalla" id="mainCanvas"></canvas>
        <div className="label">
        <div className="title">ELA </div>
        <div className="subtitle">
          <span className="letra">L</span>
          <span className="letra">I</span>
       <span className="letra">F</span>
       <span className="letra">E</span>
        </div>
      </div> 
      <div className="controls extra">
      <div className="dpad">
        <div className="up"><i className="fa fa-caret-up" onClick={()=>this.goUp()}></i></div>
        <div className="right"><i className="fa fa-caret-right" onClick={()=>this.goRight()}></i></div>
        <div className="down"><i className="fa fa-caret-down" onClick={()=>this.goDown()}></i></div>
        <div className="left"><i className="fa fa-caret-left" onClick={()=>this.goLeft()}></i></div>
        <div className="middle"></div>
      </div>
      </div>
        <Modal active={this.state.active} toggle={this.toggle} style={{styleModal}}>
        <p className='ops'>¡Oops!</p>
        <p className='chocado'>Te has chocado contra la pared.</p>
        <p className='chocado'>Has acumulado: {this.state.Score} puntos.</p>
        <img className='robot' src={process.env.PUBLIC_URL + 'assets/img/robot.png'} alt="Robot triste"></img>
        </Modal>
        <img className="fijo" src={process.env.PUBLIC_URL + `/assets/img/nav${this.state.imagen}.svg`}></img>
        <div className="iconosNav">
        <div className="home">
        <img className="icons" onClick={ this.redireccionar} src={process.env.PUBLIC_URL + '/assets/img/home.png'}></img><p onClick={this.redireccionar} className="icons">Home</p></div>
        <p className="puntuacion">{this.state.Score}</p>
        <div className="colaborar">
        <img onClick={this.redireccionar1} className="icons flor" src={process.env.PUBLIC_URL + '/assets/img/crecimiento.png'}></img> <p onClick={this.redireccionar1} className="icons">Colaborar</p>
        </div>
        </div>
        </div>
        </div>
        {this.state.quiz?(<Redirect to={{ pathname: '/quiz', state: {fase: 1} }}/>):<></> }
        </div>
      )
    }

    return ( <div>  <div className="gameboy" id="GameBoy">
  
    <div className="screen-area">    
      {/* <canvas className="display" id="mainCanvas"></canvas> */}
      <div
        id='GameBoard'
        style={{
          width: this.state.width,
          height: this.state.height,
          borderWidth: this.state.width / 50,
        }}>
        {this.state.snake.map((snakePart, index) => {
          if(index==0){
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
                  }} src={process.env.PUBLIC_URL + 'assets/img/ninja.png'}
                />
              )
            }
        })}
        <img className='Block'alt='Icono de Información'
          style={{
            width: this.state.blockWidth,
            height: this.state.blockHeight,
            left: this.state.apple.Xpos,
            top: this.state.apple.Ypos,
            background: 'white',
          }} src={process.env.PUBLIC_URL + 'assets/img/info.png'} />


        {this.state.rock? this.state.rock.map( (item,i) => {return (<img key={i} alt='Ladrillos' className='Block'
          style={{
            width: this.state.blockWidth,
            height: this.state.blockHeight,
            left: this.state.rock[i].Xpos,
            top: this.state.rock[i].Ypos,
            background: 'green',
          }} src={process.env.PUBLIC_URL + 'assets/img/ladrillo.png'} />)}): <></>}
        <div id='Score' style={{ fontSize: this.state.width / 20 }}>
        </div>

      </div>
      
      <div className="label">
        <div className="title">ELA </div>
        <div className="subtitle">
          <span className="letra">L</span>
          <span className="letra">I</span>
       <span className="letra">F</span>
       <span className="letra">E</span>
        </div>
      </div>
      
    </div>
    
    <div className="controls">
      <div className="dpad">
        <div className="up"><i className="fa fa-caret-up" onClick={()=>this.goUp()}></i></div>
        <div className="right"><i className="fa fa-caret-right" onClick={()=>this.goRight()}></i></div>
        <div className="down"><i className="fa fa-caret-down" onClick={()=>this.goDown()}></i></div>
        <div className="left"><i className="fa fa-caret-left" onClick={()=>this.goLeft()}></i></div>
        <div className="middle"></div>
      </div>
    </div>    
  </div>      
      <br/><br/><br/>
    <img className="fijo" src={process.env.PUBLIC_URL + `/assets/img/nav${this.state.imagen}.svg`}></img>
    <div className="iconosNav">
    <div className="home">
    <img className="icons" onClick={ this.redireccionar} src={process.env.PUBLIC_URL + '/assets/img/home.png'}></img><p onClick={this.redireccionar} className="icons">Home</p></div>
    <p className="puntuacion">{this.state.Score}</p>
    <div className="colaborar">
    <img onClick={this.redireccionar1} className="icons flor" src={process.env.PUBLIC_URL + '/assets/img/crecimiento.png'}></img> <p onClick={this.redireccionar1} className="icons">Colaborar</p>
    </div>
    </div>
    {this.state.redirigir?(<Redirect to={{ pathname: this.state.redirigir }}/>):<></> }
    {this.state.quiz?(<Redirect to={{ pathname: '/quiz' }}/>):<></> }
      </div>
    )
  }
}

export default SnakeGame
