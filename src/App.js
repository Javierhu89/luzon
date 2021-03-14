import React, {useState} from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Game from './components/Game/Game';
import Game1 from './components/Game1/Game1';
import Donar from './components/Donar/Donar'
import Acomp from './components/Acomp';
import Seleccion from './components/Seleccion';
import Colabora from './components/Colabora/Colabora';
import Activo from './components/Activo/Activo';
import Intro from './components/Intro/Intro';
 function App () {
return(
  <div>
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Intro}/>
        <Route exact path='/luzon' component={Main}/>
        <Route exact path='/Onboarding' component={Acomp}/>
        <Route path='/game' component={Game}/>
        <Route exact path='/phase1' component={Game1}/>
        <Route exact path='/donar' component={Donar}/>
        <Route exact path='/seleccion' component={Seleccion}/>
        <Route exact path='/colabora' component={Colabora}/>
        <Route exact path='/activo' component={Activo}/>
      </Switch>
  </BrowserRouter>
  </ div>
)
 }
export default App;
