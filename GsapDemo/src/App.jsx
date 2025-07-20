import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef, useState } from 'react'



const App = () => {
  // gsap.registerPlugin(useGSAP);
  const X=gsap.utils.random(-window.screen.availWidth/2,window.screen.availWidth/2,100);
  const Y=gsap.utils.random(-window.screen.availHeight/2,window.screen.availHeight/2,100);
  const [xValue,setxValue]=useState(0);
  const [yValue,setyValue]=useState(0);
  const [rotateValue,setrotateValue]=useState(0);
  console.log(window.screen)
  const boxRef=useRef();
  useGSAP(()=>{
    console.log(xValue)
    console.log(yValue)
    gsap.to(boxRef.current,{
      x:xValue,
      y:yValue,
      rotation:rotateValue,
      duration:2
    })
  },[rotateValue])
  
  return (
    <div className='bg-black w-full h-screen flex flex-col items-center justify-center gap-7 overflow-hidden'>
      <div 
      ref={boxRef} 
      className='h-30 w-30 bg-gradient-to-br from-blue-800 to-blue-400 rounded-3xl'>
      </div>
      <button 
      className='bg-gradient-to-br from-emerald-600 to-emerald-800 text-red-50 p-5 pt-2 pb-2 rounded-2xl z-10' 
      onClick={()=>{setxValue(X);setyValue(Y);setrotateValue(prev=>prev+360)}}>
        change
      </button>
    </div>
  )
}

export default App