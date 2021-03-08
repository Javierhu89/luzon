import React, {useState} from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Game from './components/Game/Game';
import Game1 from './components/Game1/Game1';
import Donar from './components/Donar/Donar'

 function App () {
return(
  <div style={{ 
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/img/Fondojuego.svg'})`,
    backgroundRepeat: 'no-repeat'
  }}>
  <BrowserRouter>
      <Switch>
        <Route path='/game' component={Game}/>
        <Route exact path='/' component={Main}/>
        <Route exact path='/phase1' component={Game1}/>
        <Route exact path='/donar' component={Donar}/>
      </Switch>
  </BrowserRouter>
  </ div>
)
 }
export default App;
