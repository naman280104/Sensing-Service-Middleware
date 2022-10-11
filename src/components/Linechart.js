import React, { useEffect, useState } from 'react'
import AccGyro from './AccGyro'
function Linechart(props) {
    const [start,setstart] = useState(0)
    const [end,setend] = useState(100)
    const [day,setday] = useState(1)
    const changeGraph=()=>{
        let day1;
        day1 = document.getElementById('day').value;
        setday(day1);
        console.log(day)
        console.log("button clicked")
        if(document.getElementById('intime').value){
            let start1=0;
            start1=document.getElementById('intime').value;
            setstart(parseFloat(start1))
        }
        if(document.getElementById('outtime').value){
            let end1=1e82;
            end1=document.getElementById('outtime').value;
            setend(parseFloat(end1))
    }
    
}

  
  console.log(start,end)
  return (
    <div>
        <div className="inouttime">
        <input type="number" id="intime" placeholder="Start Time"/>
        <input type="number" id="outtime" placeholder="End Time"/>
      </div>
      <div>
        <button className="Go" onClick={()=>changeGraph()}>Go</button>
      </div>
      <AccGyro starttime={start} endtime={end} day={day}/>
      
    </div>
  )
}

export default Linechart
