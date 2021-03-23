import React , {useState} from 'react';
import { Redirect } from "react-router-dom";
import './Nav.scss';

export default function Nav (props) {
const [value, setValue] = useState(null);

  let redireccionar = (i) =>{
      if (i===1){
        setValue('/')
      } else if (i===2){
        setValue('/donar')
      } else if (i===3) {
        setValue('/phase1')
      } else if (i===4) {
        setValue('/phase2')
      } else if (i===5) {
        setValue('/phase3')
      } else if (i===6) {
        setValue('/phase4')
      } else{
        setValue('/game')
      }
  }

  {/* {parseInt(localStorage.getItem('Puntos Acumulados'))>} */}
  return (
    <>
    <img className="fijo" src={process.env.PUBLIC_URL + '/assets/img/nav.png'}></img>
    <div className="iconosNav">
    <div className="home">
    <img className="icons" onClick={() => redireccionar(1)} src={process.env.PUBLIC_URL + '/assets/img/home.png'}></img><p onClick={() => redireccionar(1)} className="icons">Home</p></div>
    {props.pagina?<></>:<img className="icons play" onClick={() => redireccionar(7)} src={process.env.PUBLIC_URL + '/assets/img/play.png'}></img>}
    {props.pagina===1?<img className="icons play" onClick={() => redireccionar(3)} src={process.env.PUBLIC_URL + '/assets/img/play.png'}></img>:<></>}
    {props.pagina===2?<img className="icons play" onClick={() => redireccionar(4)} src={process.env.PUBLIC_URL + '/assets/img/play.png'}></img>:<></>}
    {props.pagina===3?<img className="icons play" onClick={() => redireccionar(5)} src={process.env.PUBLIC_URL + '/assets/img/play.png'}></img>:<></>}
    {props.pagina===4?<img className="icons play" onClick={() => redireccionar(6)} src={process.env.PUBLIC_URL + '/assets/img/play.png'}></img>:<></>}
    <div className="colaborar">
    <img onClick={() => redireccionar(2)} className="icons flor" src={process.env.PUBLIC_URL + '/assets/img/crecimiento.png'}></img> <p onClick={() => redireccionar(2)} className="icons">Colaborar</p>
    </div>
    </div>
    {value?(<Redirect to={{ pathname: value }}/>):<></> }
    </>
  );
}


