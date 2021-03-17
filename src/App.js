import React, {useState} from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Game from './components/Game/Game';
import Donar from './components/Donar/Donar'
import Acomp from './components/Acomp';
import Intro from './components/Intro/Intro';
import Home from './components/Home/Home';
import Maria from './components/Maria/Maria';
import SnakeGame from './components/snake/SnakeGame';
import SnakeGame2 from './components/SnakeGame2/SnakeGame2';
import Quiz from './components/Quiz/Quiz';
import Solucion from './components/Solucion/Solucion';
 function App () {
return(
  <div>
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Intro}/>
        <Route path='/luzon' component={Main}/>
        <Route path='/Onboarding' component={Acomp}/>
        <Route path='/home' component={Home}/>
        <Route path='/game' component={Game}/>
        <Route path='/maria' component={Maria}/>
        <Route path='/phase1' component={SnakeGame}/>
        <Route path='/phase2' component={SnakeGame2}/>
        <Route path='/quiz' component={Quiz}/>
        <Route path='/solucion' component={Solucion}/>
        <Route path='/donar' component={Donar}/>
      </Switch>
  </BrowserRouter>
  </ div>
)
 }
export default App;
