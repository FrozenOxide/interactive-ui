import React, { useState } from 'react';
import SettingsDeck from './SettingsDeck.js';

const SettingsMain = function (props) {
  const [bottles, setBottles] = useState(0);
  const [plates, setPlates] = useState(0);
  const [tipboxes, setTipBoxes] = useState(0);
    
  return (
    <div className='settings-container'>
      <h2 className='settings-section'> Designer </h2>
          
      <div className='settings-subsection'> 
        <h3>Setup</h3>
        <p>TBC</p>
      </div>
          
      <SettingsDeck bottles={bottles} setBottles={setBottles}
        plates={plates} setPlates={setPlates}
        tipboxes={tipboxes} setTipBoxes={setTipBoxes} />
          
      <div className='settings-subsection'>
        <h3>Protocol </h3>        
        <p>TBC</p>
      </div>
        
      <div className='settings-btns'>
        <button> Cancel </button>
        <button> Submit </button>
      </div>
          
    </div>
  );
}

export default SettingsMain;