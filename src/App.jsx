import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import urspayce from './urspayce-logo.webp';
import group from './Group 33171.webp'
import newimg from './newimg.png'


function App() {
  const [content, setContent] = useState("Execution and coordination of all event activities.");

  const handleClick = (section) => {
    if (section === "PRE EVENT") {
      setContent("Planning and preparation for the event.");
    } else if (section === "POST EVENT") {
      setContent("Review and analysis after the event.");
    } else if (section === "DAY OF EVENT") {
      setContent("Execution and coordination of all event activities.");
    }
  };

  return (
    <>
      <div >
        <div className='navbar'>
          <img src={urspayce} alt="urspayce-logo" />
          <p>Product</p>
          <p>Solution</p>
          <p>Resource</p>
          <p>Pricing</p>
          <button className='btn'>Login</button>
          <button className='btn'>Get Started</button>
         
        </div>

        <div className='hero-section'>
          <div className='box1'>
          <span className='green_para'>All in one Event management software </span>
          <span><img src={group} alt="" /></span>
          <p className='home_text'>A Better Way To</p>
          <p className='home_text'>Manage</p>
          <p className='home_text_blue'>Events</p>

          <p>Worlds Most Advanced Event Management Software powered by AI</p>
          <div className="email-container">
      <input
        type="email"
        className="email-input"
        placeholder="Enter your email"
        aria-label="Email"
      />
      <button className="get-started-button">Get Started</button>
    </div>
          </div>
          <div className='box2'>
          <div className="circle-container">
      <div className="circle">
        <div
          className="section pre-event"
          onClick={() => handleClick("PRE EVENT")}
        >
          PRE EVENT
        </div>
        <div
          className="section day-of-event"
          onClick={() => handleClick("DAY OF EVENT")}
        >
          DAY OF EVENT
        </div>
        <div
          className="section post-event"
          onClick={() => handleClick("POST EVENT")}
        >
          POST EVENT
        </div>
      </div>
      <div className="center-content">
        <h1>UrSpayce</h1>
        <h2>{content}</h2>
      </div>
    </div>
    <div>
      <img src={newimg} alt="" className='newimg'/>
    </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
