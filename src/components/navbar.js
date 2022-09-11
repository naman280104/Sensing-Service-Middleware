import React from "react";
import logo from "./../logo.png"


export default function Navbar(props){
  return(
    <>
      <nav>
        <img src={logo} alt = "logo" style={{height: "40px"}}></img>  
        <ul> 
          <li> <button> HOME </button> </li>
          <li> <button> ABOUT </button> </li>
          <li> <button> DEVICES </button> </li>
          <li> <button> CONTACTS </button> </li>
        </ul>      
      </nav>
    </>
  );


}