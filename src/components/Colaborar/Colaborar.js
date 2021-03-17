import React, { Component } from "react";

class Colaborar extends Component {
  render() {
    return <div style={{ 
      backgroundColor: '#BAC3D7'
    }}>
      <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
      <p className="perez">Te invito a participar</p>
      <img className="imgcolaborando" alt="Colaboración" src={process.env.PUBLIC_URL + '/assets/img/colabora2.png'}/>
      <p className="pCura">La ELA no tiene cura, pero fundaciones como Luzón nos ayudan a recibir información, apoyo psicológico e integración. Tu ayuda es muy valiosa en la lucha con nuestro día a día.</p>
      <div className="donjug">
      <button className="siguiente" onClick={this.goToOnboarding}>
        SIGUIENTE
      </button>
    </div>
    </div>
  }
}

export default Colaborar;
