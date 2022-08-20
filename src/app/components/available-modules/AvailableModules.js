import React, { useState } from 'react';

const AvailableModules = function (props) {
  const setupModules = props.setupModules;
  const deckModules = props.deckModules;
  const protocolModules = props.protocolModules;

  const renderSetupModules = function () {
    return (
      setupModules.map((module) => {
        return (
          <div key={module.name}
            data-temp={module.temperature}
            data-co2={module.co2}
            data-humidity={module.humidity}
            className='available-module available-setup-module'>
            {module.name}
            <span className='available-module-tooltip available-module-setup-tooltip'>
              <p> temp: {module.temperature} </p>
              <p> CO2: {module.co2} </p>
              <p> humidity: {module.humidity} </p>
            </span>
          </div>
        )
      })
    );
  }

  const renderDeckModules = function () {
    return (
      deckModules.map((module) => {
        return (
          <div key={module.name}
            data-type={module.type}
            data-capacity={module.capacity}
            className='available-module available-deck-module'>
            {module.name}
            <span className='available-module-tooltip available-module-deck-tooltip'>
              <p> type: {module.type} </p>
              <p> capcity: {module.capacity} </p>
            </span>
          </div>
        )
      })
    );
  }

  return (
    <div className='available-modules-container'>
      <h2> Available Modules </h2>
      
      <div className='available-setup-modules-container'>
        <h3> Setup Modules </h3>
        <div className='available-modules available-setup-modules'>
          {setupModules.length == 0 ? <p> No available setup modules</p> : renderSetupModules()}
        </div>
      </div>
          
      <div className='available-deck-modules-container'>
        <h3> Deck Modules </h3>
        <div className='available-modules available-deck-modules'>
          {setupModules.length == 0 ? <p> No available deck modules</p> : renderDeckModules()} 
        </div>
      </div>
          
      <div className='available-protocol-modules-container'>
        <h3> Protocol Modules </h3>
        <div className='available-modules available-protocol-modules'>
          {setupModules.length == 0 ? <p> No available deck modules</p> : null}   
        </div>
      </div>
    </div>
  );
}

export default AvailableModules;
