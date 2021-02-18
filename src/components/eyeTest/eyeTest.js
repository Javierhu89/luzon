import React, {useEffect} from 'react';
import gaze from "gaze-detection";

function EyeTest(){


const track = async ()=> {

  await gaze.loadModel();
  
  const init = async () => {
    const videoElement = document.querySelector("video");
    // Using the default webcam
    await gaze.setUpCamera(videoElement);
   }
   
   await init();
   const predict = async () => {
     const gazePrediction = await gaze.getGazePrediction();
     console.log("Gaze direction: ", gazePrediction); //will return 'RIGHT', 'LEFT', 'STRAIGHT' or 'TOP'
     if (gazePrediction === "RIGHT") {
       // do something when the user looks to the right
       console.log('holi')
     }
     let raf = requestAnimationFrame(predict);
   };
   await  predict();
   // cancelAnimationFrame(raf);
 }
 useEffect(track)
 // track();
   return (
     <div className="App">
     <video src=""></video>
   </div>
 );
}
export default EyeTest;