import React, {useState} from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Game from './components/Game/Game';
import Donar from './components/Donar/Donar'
import Acomp from './components/Acomp';
import Intro from './components/Intro/Intro';
import Home from './components/Home/Home';
import Maria from './components/Maria/Maria';
import SnakeGame from './components/snake/SnakeGame';
import SnakeGame2 from './components/SnakeGame2/SnakeGame2';
import SnakeGame3 from './components/SnakeGame3/SnakeGame3';
import SnakeGame4 from './components/SnakeGame4/SnakeGame4';
import Quiz from './components/Quiz/Quiz';
import Solucion from './components/Solucion/Solucion';
import Colaborar from './components/Colaborar/Colaborar';
import useWindowSize from './hooks/useWindowSize';
import DesktopWarning from './components/DesktopWarning/DesktopWarning';
 function App () {
  const { width } = useWindowSize();
return(
  <div>
  <BrowserRouter>
      <Switch>
          {width >768 ? ( <>
          <Route exact path='/' component={DesktopWarning} />
          <Route path='/onboarding' component={DesktopWarning}/>
          <Route path='/informacion' component={DesktopWarning}/>
          <Route path='/game' component={DesktopWarning}/>
          <Route path='/maria' component={DesktopWarning}/>
          <Route path='/phase1' component={DesktopWarning}/>
          <Route path='/phase2' component={DesktopWarning}/>
          <Route path='/phase3' component={DesktopWarning}/>
          <Route path='/phase4' component={DesktopWarning}/>
          <Route path='/quiz' component={DesktopWarning}/>
          <Route path='/solucion' component={DesktopWarning}/>
          <Route path='/colaborar' component={DesktopWarning}/>
          <Route path='/donar' component={DesktopWarning}/>
          </>
        ) : <>
        <Route exact path='/' component={Intro}/>
        <Route path='/onboarding' component={Acomp}/>
        <Route path='/informacion' component={Home}/>
        <Route path='/game' component={Game}/>
        <Route path='/maria' component={Maria}/>
        <Route path='/phase1' component={SnakeGame}/>
        <Route path='/phase2' component={SnakeGame2}/>
        <Route path='/phase3' component={SnakeGame3}/>
        <Route path='/phase4' component={SnakeGame4}/>
        <Route path='/quiz' component={Quiz}/>
        <Route path='/solucion' component={Solucion}/>
        <Route path='/colaborar' component={Colaborar}/>
        <Route path='/donar' component={Donar}/>
        </>}
      </Switch>
  </BrowserRouter>
  </ div>
)
 }
export default App;
