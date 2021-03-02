import React, { Component } from "react";
// import gaze from "gaze-detection";
import './Header.scss';
// const init = async () => {
//   const videoElement = document.getElementById("video");
//   await gaze.loadModel();
//   // Using the default webcam
//   await gaze.setUpCamera(videoElement);
// };
// function Header() {
//   return (
//     <>
//       <video id="video"></video>
//       <header className="App-header">
//       <button onClick={init ()}>Send</button>
//       </header>
//     </>
//   );
// }

// export default Header;
class Header extends Component {
  render() {
    return <div>
      <h1>Luzón</h1>
    </div>;
  }
}

export default Header;
