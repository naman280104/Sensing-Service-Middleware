import React, { useEffect, useState } from "react";
import sensimg1 from "./../sen1.png"
import sensimg2 from "./../sens2.png"
import sensimg3 from "./../sens3.png"
import sensimg4 from "./../sens4.png"
import sensimg5 from "./../sens5.png"
import sensimg6 from "./../sens6.png"
import sensimg7 from "./../sens7.png"
import sensimg8 from "./../sens8.png"
import Aos from "aos";
import "aos/dist/aos.css";
import Popup from "./Popup";
// import Analysis from "./analysis";
// import

export default function Sensor(props){
  useEffect(()=>{
    Aos.init({
      duration: 3000,
      delay: 500
    })
  },[])
  const [butttonpopup,setbutttonpopup] = useState(false);
  
  return(
    <>

    <div className="sensor" style={{color: "black", padding:"45px"}}>
    <h1 style={{fontSize: "42px"}}>Our Sensors</h1>
    <div className="grid-cont" >
    
      <div className="holders" data-aos= "slide-right"> 
        <img src={sensimg1} alt=''/>
        <button onClick={()=>setbutttonpopup(true)}> Analyse</button>
        
      </div>
        
      <div className="holders" data-aos= "slide-right"> 
        <img src={sensimg2} alt=''/>
        <button onClick={()=>setbutttonpopup(true)}> Analyse</button>
      </div>
      <div className="holders" data-aos= "slide-right"> 
        <img src={sensimg3} alt=''/>
        <button onClick={()=>setbutttonpopup(true)}> Analyse</button>
      </div>
      <div className="holders" data-aos= "slide-right"> 
        <img src={sensimg4} alt=''/>
        <button onClick={()=>setbutttonpopup(true)}> Analyse</button>
      </div>
      <div className="holders" data-aos= "slide-left"> 
        <img src={sensimg5} alt=''/>
        <button onClick={()=>setbutttonpopup(true)}> Analyse</button>
      </div>
      <div className="holders" data-aos= "slide-left"> 
        <img src={sensimg6} alt=''/>
        <button onClick={()=>setbutttonpopup(true)}> Analyse</button>
      </div>
      <div className="holders" data-aos= "slide-left"> 
        <img src={sensimg7} alt=''/>
        <button onClick={()=>setbutttonpopup(true)}> Analyse</button>
      </div>
      <div className="holders" data-aos= "slide-left"> 
       <img src={sensimg8} alt=''/>
        <button onClick={()=>setbutttonpopup(true)}> Analyse</button>
      </div>
      <Popup trigger={butttonpopup} setTrigger={setbutttonpopup}></Popup>
      </div>
    </div>
    
    </>
  );
}