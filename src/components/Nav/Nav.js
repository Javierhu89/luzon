import React , {useState} from 'react';
import { Redirect } from "react-router-dom";
import './Nav.scss';

export default function Nav () {
const [value, setValue] = useState(null);

  let redireccionar = (i) =>{
      if (i===1){
        setValue('/')
      } else if (i===2){
        setValue('/donar')
      }else {
        setValue('/game')
      }
  }
  return (
    <>
    <img className="fijo" src={process.env.PUBLIC_URL + '/assets/img/navegacion.svg'}></img>
    <div className="iconosNav">
    <div className="home">
    <img className="icons" onClick={() => redireccionar(1)} src={process.env.PUBLIC_URL + '/assets/img/home.png'}></img><p onClick={() => redireccionar(1)} className="icons">Home</p></div>
    <img className="icons play" onClick={() => redireccionar(3)} src={process.env.PUBLIC_URL + '/assets/img/play.png'}></img>
    <div className="colaborar">
    <img onClick={() => redireccionar(2)} className="icons flor" src={process.env.PUBLIC_URL + '/assets/img/crecimiento.png'}></img> <p onClick={() => redireccionar(2)} className="icons">Colaborar</p>
    </div>
    </div>
    {value?(<Redirect to={{ pathname: value }}/>):<></> }
    </>
  );
}


