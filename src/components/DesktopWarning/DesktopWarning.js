import './DesktopWarning.scss';
const DesktopWarning = () => {
  return (
    <main id='warningContainer'>
		<img className="warningLogo" src="assets/img/Intro.png" alt="logo-ela-life"/>
		<div className="warningMessageContainer">
	  <img className="warningImage" src="assets/img/construction.png" alt="obras"/>
      <h1 className='warningTitle'>
      CONÉCTATE DESDE TU DISPOSITIVO MÓVIL
      </h1>
		</div>
		<img className="bajera" src="assets/img/portada.svg" alt=""/>
​
    </main>
  )
}

export default DesktopWarning;
