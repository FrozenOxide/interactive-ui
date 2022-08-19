import React, { useState } from 'react';

const Setup = function (props) {
  const [name, setName] = useState('');
  const [temp, setTemp] = useState(0);
  const [co2, setCO2] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const setSetup = props.setSetup;
  const appendSetupModules = props.appendSetupModules;

  function handleSubmit(e) {
    e.preventDefault();
    if (name == '') {
      alert('you must enter a valid name');
      return;
    }
    const yes = confirm(`are you sure you want to setup with:\r\ntemp${temp}\r\nco2:${co2}\r\nhumidity:${humidity}`);
    if (!yes) {
      return;
    }
    appendSetupModules({
      name: name,
      temperature: temp,
      co2: co2,
      humidity: humidity
    })
    setName('');
    setTemp(0);
    setCO2(0);
    setHumidity(0);
  }

  return (
    <div className='cm-setup-container'>
      <h2> Environment Setup Module </h2>
      <form className='cm-setup-form' onSubmit={handleSubmit}>
        
        <label htmlFor="mod-name"> Module Name
          <input type="text" className='cm-setup-item' name="mod-name" value={name} onChange={(e) => { setName(e.target.value) } } />
        </label>
        <label htmlFor="temp">Temperature (celsius)
          <input type="number" className='cm-setup-item' name="temp" min="-100" max="100" value={temp} onChange={(e) => { setTemp(e.target.value) } } />
        </label>
        <label htmlFor="co2">CO2
          <input type="number" className='cm-setup-item' name="co2" min="-100" max="100" placeholder="0" value={co2} onChange={(e) => { setCO2(e.target.value) } }/>
        </label>
        <label htmlFor="humidity">Humidity %
          <input type="number" className='cm-setup-item' name="humidity" min="0" max="100" placeholder="0" value={humidity} onChange={(e) => {setHumidity(e.target.value)}} />
        </label>

        <input type="submit" value="Add Module" className='cm-setup-submit'/>
      </form>
    </div>
  );
}

export default Setup

