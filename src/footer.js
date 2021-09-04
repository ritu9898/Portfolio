import './App.css';
import React, { useState } from 'react';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import darkmode from './images/dark-mode.png';

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
    // document.getElementById("blog").classList.add("light-blog");
    }
    else
    {
      setMode({
        mode: 1,
        classMode: 'light'
      });
    // document.getElementById("blog").classList.remove("light-blog");
    }
    console.log(mode.mode+" "+mode.classMode);
    document.getElementById("App").classList.toggle("light");
    // document.getElementById("intro-card").classList.toggle("dark");
  }

  return (
    <div className= {mode.classMode}>
      <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 social-links">
          <a class="nav-link nav-color" data-bs-toggle="tooltip" data-bs-placement="right" title="Github" href="https://github.com/ritu9898">
          <img src={github} className="logo" alt="github" />
          </a>
          <a class="nav-link nav-color" data-bs-toggle="tooltip" data-bs-placement="right" title="LinkedIn" href="https://www.linkedin.com/in/ritu-kapadia-72a1aa145/">
            <img src={linkedin} className="logo" alt="github" />
          </a>
        </div>
        <div className="col-md-2">
          <a class="nav-link nav-color" data-bs-toggle="tooltip" data-bs-placement="right" title="Mode" href="">
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
