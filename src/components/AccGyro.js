import React, { useEffect, useState } from 'react'
import {CategoryScale} from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import png from './images/close_icon.png'
import Acc1 from './csvfiles/RAW_ACCELEROMETERS_D1.csv'
import Acc2 from './csvfiles/RAW_ACCELEROMETERS_D2.csv'
import Acc3 from './csvfiles/RAW_ACCELEROMETERS_D3.csv'
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';
import { useFetcher } from 'react-router-dom';
function AccGyro(props) {
  let csvfile=Acc1
  if(props.day==1){
    csvfile=Acc1;
  }
  if(props.day==2){
    csvfile=Acc2;
  }
  if(props.day==3){
    csvfile=Acc3;
  }
  // console.log(props.day)
  // switch (props.day){
  //   case (1):
  //     csvfile = Acc1;
  //     break; 
  //   case (2): 
  //     csvfile = Acc2;
  //     break;
  //   case (3): 
  //     csvfile = Acc3; 
  //     break;
  // }
  const [expand,setexpand]=useState(false);
  // console.log(props)
  let Range_Of_AccX=[]; 
  let Range_Of_AccY=[]; 
  let Range_Of_Altitude=[]; 
  let Range_Of_AccXKF=[]; 
  let Range_Of_AccYKF=[]; 
  let Range_Of_AccZKF=[]; 
  let Range_Of_Roll=[]; 
  let Range_Of_Pitch=[]; 
  let Range_Of_Yaw=[]; 

  // const[data,setdata] = useState('')
  var data=[];
  let flag=0;
  let Start1=props.starttime
  let end1=props.endtime
  // const [Start,setstart] = useState(Start1)
  // const [end,setend] = useState(end1)
 
  const[usedata,setusedata] = useState([])
    ChartJS.register(...registerables);
    
    
    useEffect(()=>{

      function sleep(time){
        return new Promise ((resolve) => setTimeout(resolve, time));
      }

      Papa.parse(csvfile, {
        download: true,
        complete: async function(results) {
          var tempdata = results.data;
          data=tempdata;
          flag=1
          
          // setstart(props.starttime)
          // setend(props.endtime)
          
          if(flag==1){

            // let ranges = [];

            
            Range_Of_AccX.push(Math.min(...data[2]));
            Range_Of_AccX.push(Math.max(...data[2]));

            Range_Of_AccY.push(Math.min(...data[3]));
            Range_Of_AccY.push(Math.max(...data[3]));

            Range_Of_Altitude.push(Math.min(...data[4]));
            Range_Of_Altitude.push(Math.max(...data[4]));

            Range_Of_AccXKF.push(Math.min(...data[5]));
            Range_Of_AccXKF.push(Math.max(...data[5]));

            Range_Of_AccYKF.push(Math.min(...data[6]));
            Range_Of_AccYKF.push(Math.max(...data[6]));

            Range_Of_AccZKF.push(Math.min(...data[7]));
            Range_Of_AccZKF.push(Math.max(...data[7]));

            Range_Of_Roll.push(Math.min(...data[8]));
            Range_Of_Roll.push(Math.max(...data[8]));

            Range_Of_Pitch.push(Math.min(...data[9]));
            Range_Of_Pitch.push(Math.max(...data[9]));

            Range_Of_Yaw.push(Math.min(...data[10]));
            Range_Of_Yaw.push(Math.max(...data[10]));

            console.log("RRRRRAAAAAAAANNNGGGGGEEEEEEE = ", Range_Of_AccX[0]);
            
            
            let j = 0;
            let k = 99;

            while(true){// let j=1;
            j++;
            k++;
            // console.log('im here');
            // let k=data.length-2;
            // // console.log(Start, end, "time yahan hai");
            // while(parseFloat(data[j][0])<props.starttime) j++;
            // while(parseFloat(data[k][0])>props.endtime) k--;


      let label=[];
      let AccX=[];
      let AccY=[];
      let Altitude=[];
      let AccXKF=[];
      let AccYKF=[];
      let AccZKF=[];
      let Roll=[];
      let Pitch=[];
      let Yaw=[];
      
      let usedata=[];
      for(let i=j; i<=k; i++){
        label.push(data[i][0])
        AccX.push(data[i][2])
        AccY.push(data[i][3])
        Altitude.push(data[i][4])
        AccXKF.push(data[i][5])
        AccYKF.push(data[i][6])
        AccZKF.push(data[i][7])
        Roll.push(data[i][8])
        Pitch.push(data[i][9])
        Yaw.push(data[i][10])
      }
      usedata.push(label);
      usedata.push(AccX);
      usedata.push(AccY);
      usedata.push(Altitude);
      usedata.push(AccXKF);
      usedata.push(AccYKF);
      usedata.push(AccZKF);
      usedata.push(Roll);
      usedata.push(Pitch);
      usedata.push(Yaw);

      await sleep(50);
      setusedata(usedata);
      // await sleep();

    //   setInterval(function() {
    //     setusedata(usedata);
    //  }, 5000)
      
        
      if(!(k<data.length)){
        j=1;
        k=100;
      }
    }
    }
    
  }
}
);
},[props.starttime,props.endtime,props.day]);
// console.log("time here ",Start,end)


// setInterval(()=>{
//   setusedata(usedata);
// }, 500);

// useEffect(()=>{
//   console.log("here\n");
//   setInterval(()=>{
//     setusedata(usedata);
//   }, 500)
// }, [usedata, props.day])

    

// console.log("my",usedata);

const expanddiv=(e)=>{
if(expand==false){
console.log("mai aa gya");
for(let i=1 ;i<10; i++){
  document.getElementById('chart'+i).style.cssText = "visibility: hidden; background-color: white;height: 17vw ; width: 28vw; border-radius: 8px; margin-left: 1px; margin-bottom: 20px; position: relative;"
}
document.getElementById(e).style.cssText='position: absolute; top: 15vh; left:0.5vw; z-index: 2; height: 75vh; width: 88vw; transition: height 0s; background-color: white;'
document.getElementById('lineid'+e[5]).style.cssText = 'height:65vh;'
document.getElementById('czg'+e[5]).style.cssText = 'visibility:visible; border-radius:4px; border:2px solid black; padding-left: 3px; padding-right: 3px;'
document.getElementById("mainpopup").scrollTop = 0;
document.getElementById('mainpopup').style.cssText = 'position: absolute; top: -15vh; left: 0vw; bottom: -5vh; right:0vw; background-color:#2ec4b6; display: inline-block; overflow:hidden;'
setexpand(true)}
}
  const popupclose=(e)=>{
    console.log(323)
    setexpand(false)
    document.getElementById('lineid'+e[5]).style.cssText = 'height:28vh;'
    document.getElementById('hor').style.cssText = 'display: flex; flex-direction: row; justify-content: space-around;'
    document.getElementById(e).style.cssText='background-color: white; height: 17vw ; width: 28vw; border-radius: 8px; margin-left: 1px; margin-bottom: 20px;'
    for(let i=1 ;i<10; i++){
    document.getElementById('czg'+i).style.cssText = 'visibility:hidden; border-radius:4px; border:2px solid black; padding-left: 10px; padding-right: 10px;'
    document.getElementById('chart'+i).style.cssText = "background-color: white;height: 17vw ; width: 28vw; border-radius: 8px; margin-left: 1px; margin-bottom: 20px; position: relative;"

    }
    document.getElementById('mainpopup').style.cssText = 'position: absolute; top: -15vh; left: 0vw; bottom: -5vh; right:0vw; overflow:scroll; background-color:#2ec4b6; display: inline-block;'


  }

  const dataAccX = {
    labels:usedata[0],
    datasets: [
      {
        label: "Accx",
        data: usedata[1],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
  const dataAccY = {
    labels:usedata[0],
    datasets: [
      {
        label: "AccY",
        data: usedata[2],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
  const dataAltitude = {
    labels:usedata[0],
    datasets: [
      {
        label: "Altitude",
        data: usedata[3],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
  const dataAccXKF = {
    labels:usedata[0],
    datasets: [
      {
        label: "AccXKF",
        data: usedata[4],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
  const dataAccYKF = {
    labels:usedata[0],
    datasets: [
      {
        label: "AccYKF",
        data: usedata[5],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
  const dataAccZKF = {
    labels:usedata[0],
    datasets: [
      {
        label: "AccZKF",
        data: usedata[6],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
  const dataRoll = {
    labels:usedata[0],
    datasets: [
      {
        label: "Roll",
        data: usedata[7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
  const dataPitch = {
    labels:usedata[0],
    datasets: [
      {
        label: "Pitch",
        data: usedata[8],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
  const dataYaw = {
    labels:usedata[0],
    datasets: [
      {
        label: "Yaw",
        data: usedata[9],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius:0,
        borderWidth:1
      },
    ],
  };
      



  //UNSCALED
  // return (
  //     <div className="verticalscroll">
  //       <div className="horizontalscroll" id="hor"> 
  //         <div className="chart" id="chart1" onClick={()=>expanddiv('chart1')}><button className="czg" id="czg1" onClick={()=>popupclose('chart1')} ><img src={png} alt="" /></button><div className='linediv' id="lineid1"><Line options={{maintainAspectRatio:false}} data={dataAccX}></Line></div></div>
  //         <div className="chart" id="chart2" onClick={()=>expanddiv('chart2')}><button className="czg" id="czg2" onClick={()=>popupclose('chart2')} ><img src={png} alt="" /></button><div className='linediv' id="lineid2"><Line options={{maintainAspectRatio:false}} data={dataAccY}></Line></div></div>
  //         <div className="chart" id="chart3" onClick={()=>expanddiv('chart3')}><button className="czg" id="czg3" onClick={()=>popupclose('chart3')} ><img src={png} alt="" /></button><div className='linediv' id="lineid3"><Line options={{maintainAspectRatio:false}} data={dataAltitude}></Line></div></div>
  //       </div>
  //       <div className="horizontalscroll"> 
  //         <div className="chart" id="chart4" onClick={()=>expanddiv('chart4')}><button className="czg" id="czg4" onClick={()=>popupclose('chart4')} ><img src={png} alt="" /></button><div className='linediv' id="lineid4"><Line options={{maintainAspectRatio:false}} data={dataAccXKF}></Line></div></div>
  //         <div className="chart" id="chart5" onClick={()=>expanddiv('chart5')}><button className="czg" id="czg5" onClick={()=>popupclose('chart5')} ><img src={png} alt="" /></button><div className='linediv' id="lineid5"><Line options={{maintainAspectRatio:false}} data={dataAccYKF}></Line></div></div>
  //         <div className="chart" id="chart6" onClick={()=>expanddiv('chart6')}><button className="czg" id="czg6" onClick={()=>popupclose('chart6')} ><img src={png} alt="" /></button><div className='linediv' id="lineid6"><Line options={{maintainAspectRatio:false}} data={dataAccZKF}></Line></div></div>
  //       </div>
  //       <div className="horizontalscroll"> 
  //         <div className="chart" id="chart7" onClick={()=>expanddiv('chart7')}><button className="czg" id="czg7" onClick={()=>popupclose('chart7')} ><img src={png} alt="" /></button><div className='linediv' id="lineid7"><Line options={{maintainAspectRatio:false}} data={dataRoll}></Line></div></div>
  //         <div className="chart" id="chart8" onClick={()=>expanddiv('chart8')}><button className="czg" id="czg8" onClick={()=>popupclose('chart8')} ><img src={png} alt="" /></button><div className='linediv' id="lineid8"><Line options={{maintainAspectRatio:false}} data={dataPitch}></Line></div></div>
  //         <div className="chart" id="chart9" onClick={()=>expanddiv('chart9')}><button className="czg" id="czg9" onClick={()=>popupclose('chart9')} ><img src={png} alt="" /></button><div className='linediv' id="lineid9"><Line options={{maintainAspectRatio:false}} data={dataYaw}></Line></div></div>
  //       </div>
  //     </div>
  // )

  //SCALED
  return (
    <div className="verticalscroll">
      <div className="horizontalscroll" id="hor"> 
        <div className="chart" id="chart1" onClick={()=>expanddiv('chart1')}><button className="czg" id="czg1" onClick={()=>popupclose('chart1')} ><img src={png} alt="" /></button><div className='linediv' id="lineid1"><Line options={{maintainAspectRatio:false, scales: {y: {max: 0.15, min: -0.15}}}} data={dataAccX}></Line></div></div>
        <div className="chart" id="chart2" onClick={()=>expanddiv('chart2')}><button className="czg" id="czg2" onClick={()=>popupclose('chart2')} ><img src={png} alt="" /></button><div className='linediv' id="lineid2"><Line options={{maintainAspectRatio:false, scales: {y: {max: 0.2, min: -0.2, ticks: {stepSize : 0.02}}}}} data={dataAccY}></Line></div></div>
        <div className="chart" id="chart3" onClick={()=>expanddiv('chart3')}><button className="czg" id="czg3" onClick={()=>popupclose('chart3')} ><img src={png} alt="" /></button><div className='linediv' id="lineid3"><Line options={{maintainAspectRatio:false, scales: {y: {max: 0.2, min: -0.2, ticks: {stepSize : 0.02}}}}} data={dataAltitude}></Line></div></div>
      </div>
      <div className="horizontalscroll"> 
        <div className="chart" id="chart4" onClick={()=>expanddiv('chart4')}><button className="czg" id="czg4" onClick={()=>popupclose('chart4')} ><img src={png} alt="" /></button><div className='linediv' id="lineid4"><Line options={{maintainAspectRatio:false, scales: {y: {max: 0.2, min: -0.2, ticks: {stepSize : 0.02}}}}} data={dataAccXKF}></Line></div></div>
        <div className="chart" id="chart5" onClick={()=>expanddiv('chart5')}><button className="czg" id="czg5" onClick={()=>popupclose('chart5')} ><img src={png} alt="" /></button><div className='linediv' id="lineid5"><Line options={{maintainAspectRatio:false, scales: {y: {max: 0.2, min: -0.2, ticks: {stepSize : 0.02}}}}} data={dataAccYKF}></Line></div></div>
        <div className="chart" id="chart6" onClick={()=>expanddiv('chart6')}><button className="czg" id="czg6" onClick={()=>popupclose('chart6')} ><img src={png} alt="" /></button><div className='linediv' id="lineid6"><Line options={{maintainAspectRatio:false, scales: {y: {max: 0.2, min: -0.2, ticks: {stepSize : 0.02}}}}} data={dataAccZKF}></Line></div></div>
      </div>
      <div className="horizontalscroll"> 
        <div className="chart" id="chart7" onClick={()=>expanddiv('chart7')}><button className="czg" id="czg7" onClick={()=>popupclose('chart7')} ><img src={png} alt="" /></button><div className='linediv' id="lineid7"><Line options={{maintainAspectRatio:false, scales: {y: {max: -1.3, min: -1.8, ticks: {stepSize : 0.05}}}}} data={dataRoll}></Line></div></div>
        <div className="chart" id="chart8" onClick={()=>expanddiv('chart8')}><button className="czg" id="czg8" onClick={()=>popupclose('chart8')} ><img src={png} alt="" /></button><div className='linediv' id="lineid8"><Line options={{maintainAspectRatio:false, scales: {y: {max: 0.2, min: -0.2, ticks: {stepSize : 0.02}}}}} data={dataPitch}></Line></div></div>
        <div className="chart" id="chart9" onClick={()=>expanddiv('chart9')}><button className="czg" id="czg9" onClick={()=>popupclose('chart9')} ><img src={png} alt="" /></button><div className='linediv' id="lineid9"><Line options={{maintainAspectRatio:false, scales: {y: {max: 1, min: -1.5, ticks: {stepSize : 0.2}}}}} data={dataYaw}></Line></div></div>
      </div>
    </div>
  )




}

export default AccGyro
