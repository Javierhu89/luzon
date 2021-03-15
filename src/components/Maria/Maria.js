import React, { Component } from "react";
import './Maria.scss';
import { Redirect } from "react-router-dom";
class Maria extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       jugar:null
    }
  }
  irAjugar = () => {
    this.setState({'jugar':true})
  }
  render() {
    if(this.props.paginas!==null){
    return <div style={{ 
      backgroundColor: '#BAC3D7'
    }}>
      <div className="superior">
      <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
      <p className="perez">María Perez</p>
      <img alt="Logo de sonido" className="sonido" src={process.env.PUBLIC_URL + '/assets/img/sonido.png'}/>
      </div>
      <p className="descrip">Hola, gracias por elegir jugar conmigo.</p>
      <p className="descrip">Soy Maria Perez, vivo en Bilbao, tengo 20 años y vivo con mis padres, soy deportista de alto rendimiento en el mundo de la gimnasia rítmica profesional.</p>
      <img alt="María haciendo Gimnasia" className="momento" src={process.env.PUBLIC_URL + '/assets/img/gimnasia.png'}/>
      <p className="descrip tiempo">Desde hace 6 o 7 meses no me siento bien, he empezado a notar falta de fuerza en mis piernas, mi fisioterapeuta ha estado trabajando conmigo pero no encuentra la explicación a lo que me pasa.</p>
      <img alt="María llorando" className="momento" src={process.env.PUBLIC_URL + '/assets/img/llorando.png'}/>
      <p className="descrip ayuda">Me han recomendado ir al neurólogo aunque no tengo patologías genéticas¿me ayudas a conseguir información?.</p>
      <button onClick={this.irAjugar}>¡A jugar!</button>
      {this.state.jugar?(<Redirect to={{ pathname: '/phase1' }}/>):<></> }
      </div>;
    } else if (this.props.paginas===1){
      return <div style={{ 
        backgroundColor: '#BAC3D7'
      }}>
      <div className="superior">
      <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
      <p className="perez">María Perez</p>
      <img alt="Logo de sonido" className="sonido" src={process.env.PUBLIC_URL + '/assets/img/sonido.png'}/>
      </div>
      <p className="descrip">Estoy en el hospital de Basurto, me han visto más de 10 médicos y me han hecho diferentes pruebas, sigo sin encontrarme mejor y los médicos aún no saben qué me pasa.</p>
      <img alt="Doctor mirando radiografía" className="momento" src={process.env.PUBLIC_URL + '/assets/img/doctor.png'}/>
      <p className="descrip tiempo">Han sugerido que los síntomas se relacionan con las de la esclerosis múltiple pero sigo sin estar segura. Estoy asustada, ¿conseguirán hacerme alguna prueba que determine que me pasa?¿A cuántos hospitales mas tendre que ir?.</p>
      </div>
    } else if(this.props.paginas===1){
      return <div style={{ 
        backgroundColor: '#BAC3D7'
      }}>
      <div className="superior">
      <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
      <p className="perez">María Perez</p>
      <img alt="Logo de sonido" className="sonido" src={process.env.PUBLIC_URL + '/assets/img/sonido.png'}/>
      </div>
      <p className="descrip">Está confirmado. Mi diagnóstico final después de 9 meses de pruebas es ELA. Me siento muy abrumada y no estoy segura de lo que debo hacer a continuación. Necesito un fisioterapeuta que me ayude a levantarme por las mañanas y un psicólogo para poder asumir todo lo que me esta pasando. También estoy preocupada por los trámites que tengo que rellenar. Parece que nadie puede guiarme en los siguientes pasos. ¿Me ayudas?.</p>
      <img alt="María buscando entre documentos" className="momento" src={process.env.PUBLIC_URL + '/assets/img/documentos.png'}/>
      </div>
  } else {
    return <div style={{ 
      backgroundColor: '#BAC3D7'
    }}>
    <div className="superior">
    <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
    <p className="perez">María Perez</p>
    <img alt="Logo de sonido" className="sonido" src={process.env.PUBLIC_URL + '/assets/img/sonido.png'}/>
    </div>
    <p className="descrip">Ha pasado un año desde que tengo la ELA, mi familia se ha gastado este año 20.000€, que es cuando empecé a necesitar ayudas técnicas (vehículo adaptado, sillas manuales, silla eléctrica, adaptación al baño, grúa de techo). He recibido solo 4.000€ de ayudas del País vasco por la adquisición de las sillas.En el futuro la ELA nos va a suponer más gastos aun porque mi movilidad se reduce cada día.¿Me ayudas a conseguir fondos?</p> </div>
  }
}
}

export default Maria;
