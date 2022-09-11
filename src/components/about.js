import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import abtimg from "./../img1.png"
import next from "./../next.png"

export default function About(props){
  useEffect(()=>{
    Aos.init({
      duration: 2000,
      // delay: 000,
      easing: "ease-in"

    });
  }, [])
  return(
    <>
      <div className="about" >
        <div style={{width: "100vw", display:"flex", columnGap: "8%", padding: "0 50px", marginTop: "-5vh"}}>
          <img src={abtimg} alt="imgalttext" data-aos = "fade-right"/>
          <div className="container" >
            <h1 style={{fontSize: "45px", margin: "20px 0 40px 0"}} data-aos = "fade-up">ABOUT US</h1>
            <section style={{lineHeight: "30px", fontSize: "20px", fontWeight: "200"}} data-aos = "fade-up"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </section>
          </div>
        </div>  
        <div className="card-cont">
          <div className="card" style={{backgroundColor: "#08080C"}} data-aos = "fade-right">
            <h1 style={{fontSize: "42px"}}> 01 </h1>
            <div style={{margin: "15px 0", fontSize: "larger", fontWeight: "bolder"}}> Choose the device </div>
            <span style={{fontWeight: "lighter"}}> Select from our wide range of sensors </span>
            <img src = {next} alt="nexttext" style={{filter: "invert(100)"}}/>
          </div>
          <div className="card" style={{backgroundColor: "#3c6e71" }} data-aos = "fade-right">
            <h1 style={{fontSize: "42px"}}> 01 </h1>
            <div style={{margin: "15px 0", fontSize: "larger", fontWeight: "bolder"}}> Choose the device </div>
            <span style={{fontWeight: "lighter"}}> Select from our wide range of sensors </span>
            <img src = {next} alt="nexttext" style={{filter: "invert(100)"}}/>
            

          </div>
          <div className="card" style={{backgroundColor: "#d9d9d9", color: "black"}} data-aos = "fade-right">
            <h1 style={{fontSize: "42px"}}> 01 </h1>
            <div style={{margin: "15px 0", fontSize: "larger", fontWeight: "bolder"}}> Choose the device </div>
            <span style={{fontWeight: "lighter"}}> Select from our wide range of sensors </span>
            <img src = {next} alt="nexttext" />
            

          </div>
          <div className="card" style={{backgroundColor: "white", color: "black"}} data-aos = "fade-right">
            <h1 style={{fontSize: "42px"}}> 01 </h1>
            <div style={{margin: "15px 0", fontSize: "larger", fontWeight: "bolder"}}> Choose the device </div>
            <span style={{fontWeight: "lighter"}}> Select from our wide range of sensors </span>
            <img src = {next} alt="nexttext" />
            
          </div>

        </div>
      </div>
        
    </>
  );
}