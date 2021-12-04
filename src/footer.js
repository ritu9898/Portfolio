import './App.css';
import React, { useState } from 'react';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import darkmode from './images/dark-mode.png';
import twitter from './images/twitter1.png'; 

function Footer() {
  
  const classMode = "dark";
  const [mode, setMode] = useState(0);

  function toggleClass(){
    if(mode == 1 || mode.mode == 1)
    {
      setMode({
        mode: 0,
        classMode: 'dark'
      });
    }
    else
    {
      setMode({
        mode: 1,
        classMode: 'light'
      });
    }
    document.getElementById("App").classList.toggle("light");
  }

  return (
    <div className= {mode.classMode}>
      <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 social-links">
          <a className="nav-link nav-color" data-bs-toggle="tooltip" data-bs-placement="right" title="Github" href="https://github.com/ritu9898">
          <img src={github} className="logo" alt="github" />
          </a>
          <a className="nav-link nav-color" data-bs-toggle="tooltip" data-bs-placement="right" title="LinkedIn" href="https://www.linkedin.com/in/ritu-kapadia-72a1aa145/">
            <img src={linkedin} className="logo" alt="linkedin" />
          </a>
          <a className="nav-link nav-color" data-bs-toggle="tooltip" data-bs-placement="right" title="Twitter" href="https://twitter.com/KapadiaRitu">
            <img src={twitter} className="logo" alt="twitter" />
          </a>
        </div>
        <div className="col-md-2">
          <a className="nav-link nav-color" data-bs-toggle="tooltip" data-bs-placement="right" title="Mode" href="">
            <label className="switch">
              <input type="checkbox" onClick={toggleClass} />
              <span className="slider round"></span>
            </label>
          </a>  
        </div>
      </div>
    </div>
  );
}

export default Footer;
