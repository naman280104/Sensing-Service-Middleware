import './App.css';
import Navbar from './components/navbar';
import vid from  "./video.mp4";
import scroll_down from "./scroll_icon.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import About from './components/about';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage"
import Sensor from './components/sensor1';

// for check
import AccGyro from './components/AccGyro';

function App() {
  const [offset, setOffset] = useState(window.pageYOffset);

  window.addEventListener("scroll", (e)=>{
      console.log(window.pageYOffset);
      setOffset(window.pageYOffset*5);
  })

  useEffect(()=>{
    Aos.init({
      duration: 3000,
    });
  }, [])

  return (
    <>
    
    
    <Fullpage>
      <FullpageNavigation/>
      <FullPageSections>
        <FullpageSection>
          <div className='landing'>
              <Navbar> </Navbar>
              <div className='wrapper'>
              <div className='text-cont' data-aos = "fade-right" style={{marginRight: offset}}>
                  <h1 style={{fontSize: "70px",margin: `0 0 30px 0`,}}>  ANALYX </h1>
                  <section style={{lineHeight: "30px", color: "white"}} data-aos =  "fade-right" data-aos-delay = "1000">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .
                  </section>
                  <a href='#' style={{textDecoration: "none"}}> <button className='btn'> KNOW MORE </button> </a> 
                </div>
                    <video muted autoPlay loop>
                      <source src={vid} type = "video/mp4"  id = 'myvid'/>
                    </video>
              </div>
              <img src={scroll_down}  alt="txt" style={{height: "50px", position: "absolute", zIndex: "2", top: "90vh", right: "50%"}} />
            </div>    
        </FullpageSection>

        <FullpageSection>
          <About></About>      
        </FullpageSection>

        <FullpageSection>
          <Sensor></Sensor>
        </FullpageSection>


      </FullPageSections>
    </Fullpage>
        





      


            
    </>
  );
}

export default App;
