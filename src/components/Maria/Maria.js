import React, { Component } from "react";
import './Maria.scss';
import { Redirect } from "react-router-dom";
import Nav from "../Nav/Nav";
class Maria extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       jugar:null,
       sound:1
    }
  }
  irAjugar = () => {
    this.setState({'jugar':true})
  }
  playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    this.setState ({'sound':2})
  }
  quitarAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.pause()
    this.setState ({'sound':1})
  }
  
  render() {
    if(this.props.location.state===undefined){
      return (
      <Redirect to={{ pathname: '/game' }}/>
      )
    } else {
    if(this.props.location.state.fase===1){
    return <div style={{ 
      backgroundColor: '#BAC3D7'
    }}>
      <audio className="audio-element">
          <source src={process.env.PUBLIC_URL + 'assets/music/Fase_1.mp3'}></source>
      </audio>
      <div className="superior">
      <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
      <p className="perez">María Pérez</p>
      {this.state.sound===1?<img onClick={this.playAudio} alt="Logo de sonido tachado" className="No sonido" src={process.env.PUBLIC_URL + '/assets/img/nosonido.png'}/>
      :<img onClick={this.quitarAudio} alt="Logo de sonido" className="sonido" src={process.env.PUBLIC_URL + '/assets/img/sonido.png'}/>
      }
      </div>
      <p className="descrip">Hola, gracias por elegir jugar conmigo.</p>
      <p className="descrip">Soy María Pérez, vivo en Bilbao, tengo 20 años y vivo con mis padres, soy deportista de alto rendimiento en el mundo de la gimnasia rítmica.</p>
      <img alt="María haciendo Gimnasia" className="momento" src={process.env.PUBLIC_URL + '/assets/img/gimnasia.png'}/>
      <p className="descrip tiempo">Desde hace 6 o 7 meses no me siento bien, he empezado a notar falta de fuerza en mis piernas, mi fisioterapeuta ha estado trabajando conmigo pero no encuentra la explicación a lo que me pasa.</p>
      <img alt="María llorando" className="momento" src={process.env.PUBLIC_URL + '/assets/img/llorando.png'}/>
      <p className="descrip ayuda">Me han recomendado ir al neurólogo aunque no tengo patologías genéticas. ¿Me ayudas a conseguir más información?.</p>
      <img onClick={this.irAjugar} alt="Fecha hacia la derecha" className="Flecha" src={process.env.PUBLIC_URL + '/assets/img/flechaderecha.png'}/>
      <Nav pagina={this.props.location.state.fase} />
      {this.state.jugar?(<Redirect to={{ pathname: '/phase1' }}/>):<></> }
      </div>;
    } else if (this.props.location.state.fase===2){
      return <div style={{ 
        backgroundColor: '#BAC3D7'
      }}>
      <audio className="audio-element">
      <source src={process.env.PUBLIC_URL + 'assets/music/Fase_2.mp3'}></source>
      </audio>
      <div className="superior">
      <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
      <p className="perez">María Perez</p>
      {this.state.sound===1?<img onClick={this.playAudio} alt="Logo de sonido tachado" className="No sonido" src={process.env.PUBLIC_URL + '/assets/img/nosonido.png'}/>
      :<img onClick={this.quitarAudio} alt="Logo de sonido" className="sonido" src={process.env.PUBLIC_URL + '/assets/img/sonido.png'}/>
      }
      </div>
      <p className="descrip">Estoy en el hospital de Basurto, me han visto más de 10 médicos y me han hecho diferentes pruebas, pero sigo sin encontrarme mejor y los médicos aún no saben qué me pasa.</p>
      <img alt="Doctor mirando radiografía" className="momento doctor" src={process.env.PUBLIC_URL + '/assets/img/doctor.png'}/>
      <p className="descrip tiempo sintoma">Han sugerido que los síntomas se relacionan con los de la esclerosis múltiple pero sigo sin estar segura. Estoy asustada, ¿conseguirán hacerme alguna prueba que determine qué me pasa?.</p>
      <img onClick={this.irAjugar} alt="Fecha hacia la derecha" className="Flecha basurto" src={process.env.PUBLIC_URL + '/assets/img/flechaderecha.png'}/>
      <Nav pagina={this.props.location.state.fase}/>
      {this.state.jugar?(<Redirect to={{ pathname: '/phase2' }}/>):<></> }
      </div>
    } else if(this.props.location.state.fase===3){
      return <div style={{ 
        backgroundColor: '#BAC3D7'
      }}>
      <audio className="audio-element">
      <source src={process.env.PUBLIC_URL + 'assets/music/Fase_3.mp3'}></source>
      </audio>
      <div className="superior">
      <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
      <p className="perez">María Perez</p>
      {this.state.sound===1?<img onClick={this.playAudio} alt="Logo de sonido tachado" className="No sonido" src={process.env.PUBLIC_URL + '/assets/img/nosonido.png'}/>
      :<img onClick={this.quitarAudio} alt="Logo de sonido" className="sonido" src={process.env.PUBLIC_URL + '/assets/img/sonido.png'}/>
      }
      </div>
      <p className="descrip">Está confirmado. Mi diagnóstico final después de 9 meses de pruebas es ELA. Me siento muy abrumada y no estoy segura de lo que debo hacer a continuación. Necesito un fisio que me ayude a levantarme por las mañanas y un psicólogo para poder asumir todo lo que me esta pasando. También estoy preocupada por los trámites que tengo que rellenar. Parece que nadie puede guiarme en estos pasos. ¿Me ayudas?.</p>
      <img alt="María buscando entre documentos" className="momento tumbada" src={process.env.PUBLIC_URL + '/assets/img/documentos.png'}/>
      <img onClick={this.irAjugar} alt="Fecha hacia la derecha" className="Flecha" src={process.env.PUBLIC_URL + '/assets/img/flechaderecha.png'}/>
      <Nav pagina={this.props.location.state.fase}/>
      {this.state.jugar?(<Redirect to={{ pathname: '/phase3' }}/>):<></> }
      </div>
  } else {
    return <div style={{ 
      backgroundColor: '#BAC3D7'
    }}>
    <audio className="audio-element">
    <source src={process.env.PUBLIC_URL + 'assets/music/Fase_4.mp3'}></source>
    </audio>
    <div className="superior">
    <img alt="Foto de María" className="iconomaria" src={process.env.PUBLIC_URL + '/assets/img/maria.png'}/>
    <p className="perez">María Perez</p>
    {this.state.sound===1?<img onClick={this.playAudio} alt="Logo de sonido tachado" className="No sonido" src={process.env.PUBLIC_URL + '/assets/img/nosonido.png'}/>
      :<img onClick={this.quitarAudio} alt="Logo de sonido" className="sonido" src={process.env.PUBLIC_URL + '/assets/img/sonido.png'}/>
      }
    </div>
    <p className="descrip">Ha pasado un año desde que me diagnosticaron la ELA. En este año, mi familia se ha gastado más de 20.000€ en ayudas técnicas para mi movilidad, un vehículo adaptado, una silla manual, una silla eléctrica, adaptación para el baño, una grúa de techo, pero sólo he recibido 4.000€ de ayudas por la compra de las sillas. En el futuro, la ELA va a suponer muchos más gastos a mi familia, ya que mi movilidad se reduce cada día y cada vez necesito más ayuda. ¿Me ayudas a conseguir fondos?.</p> 
    <img onClick={this.irAjugar} alt="Fecha hacia la derecha" className="Flecha baja final" src={process.env.PUBLIC_URL + '/assets/img/flechaderecha.png'}/>
    <Nav pagina={this.props.location.state.fase}/>
    {this.state.jugar?(<Redirect to={{ pathname: '/phase4' }}/>):<></> }
    </div>
  }
}
}
}

export default Maria;
