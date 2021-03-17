import React, { Component } from "react";
import './Colaborar.scss';
import { Redirect } from "react-router-dom";
class Colaborar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       donar:false
    }
  }
  
  goToDonar = () => {
    this.setState({'donar':true})
  }

  render() {
    return <div className="total" style={{ 
      backgroundColor: '#BAC3D7'
    }}> <div className='colabora'>
      <img alt="Foto de María" className="iconomaria participar" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
      <p className="perez participar">Te invito a participar</p>
      </div>
      <img className="imgcolaborando" alt="Colaboración" src={process.env.PUBLIC_URL + '/assets/img/colabora2.png'}/>
      <p className="pCura">La ELA no tiene cura, pero fundaciones como Luzón nos ayudan a recibir información, apoyo psicológico e integración. Tu ayuda es muy valiosa en la lucha con nuestro día a día.</p>
      <div className="donjug">
      <button className="siguiente dono" onClick={this.goToDonar}>
        Colaborar
      </button>
    </div>
    {this.state.donar?(<Redirect to={{ pathname: '/Donar' }}/>):<></> }
    </div>
  }
}

export default Colaborar;
