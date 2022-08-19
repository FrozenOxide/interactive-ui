import React, { useState} from 'react';

const SettingsDeck = function (props) {
  const [bottles, setBottles] = [props.bottles, props.setBottles];
  const [plates, setPlates] = [props.plates, props.setPlates];
  const [tipboxes, setTipBoxes] = [props.tipboxes, props.setTipBoxes];


  return (
    <div className='settings-subsection'>
      <h3> Deck </h3>
              
      <div className='input-container'>
        <label htmlFor="num-bottles"> Number of bottles: {bottles}</label>
        <input type="range" className='deck-num' name="num-bottles" min="0" max="10" value={bottles} onChange={(e) => { setBottles(e.target.value) }} />
      </div>
        
      <div className='input-container'>
        <label htmlFor="num-plates"> Number of plates: {plates}</label>
        <input type="range" className='deck-num' name="num-plates" min="0" max="10" value={plates} onChange={(e) => { setPlates(e.target.value) }}/>
      </div>
              
      <div className='input-container'>
        <label htmlFor="num-plates"> Number of Tip Boxes: {tipboxes}</label>
        <input type="range" className='deck-num' name="num-tip-boxes" min="0" max="10" value={tipboxes} onChange={(e) => { setTipBoxes(e.target.value) }}/>
      </div>
    </div> 
  );
}

export default SettingsDeck;