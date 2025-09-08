import React, { useState } from 'react';
import './ToggleSwitch.css';
import sunIconB from '../assets/sun_b.svg';
import moonIconB from '../assets/moon_b.svg';
import sunIconW from '../assets/sun_w.png';
import moonIconW from '../assets/moon_w.png';

const ToggleSwitch = ({isToggled, onToggle}) => {

  return (
    <div className="toggle-container">
      <span className={`icon ${!isToggled ? 'active-icon': ''}`}><img src={!isToggled ? sunIconB : sunIconW} alt="Sun Icon" width={20}/></span>
      <div 
        className={`toggle-switch ${isToggled ? 'toggled' : ''}`}
        onClick={onToggle}
      >
        <div className="toggle-ball"></div>
      </div>
      <span className={`icon ${isToggled ? 'active-icon': ''}`}><img src={!isToggled ? moonIconB : moonIconW} alt="Moon Icon" width={20}/></span>
    </div>
  );
};

export default ToggleSwitch;