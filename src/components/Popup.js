import React, { useState } from "react";
import AccGyro from "./AccGyro";
import Linechart from "./Linechart";
import png from './images/close_icon.png'
function Popup(props) {
  
  return props.trigger ? (
    <div className="popup" id="mainpopup">
      <div>
        <button className="closepopup" onClick={() => props.setTrigger(false)}>
          <img src={png} alt="" />
        </button>
      </div>
      <div className="dropdown">
        <ul>
          <li>
            <a href="#">Select Device</a>
            <select name="" className="all-dropdowns">
              <option value="">Accelerometer</option>
              <option value="">Gyroscope</option>
              <option value="">Sensor3</option>
            </select>
          </li>
          <li>
            <a href="#">Select Day</a>
            <select name="" id="day" className="all-dropdowns">
              <option value="1">Day 1</option>
              <option value="2">Day 2</option>
              <option value="3">Day 3</option>
            </select>
          </li>
        </ul>
      </div>
      
       <Linechart />
      
    </div>
  ) : (
    <></>
    );
  
}

export default Popup;
