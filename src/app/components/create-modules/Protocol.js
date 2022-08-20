import React, { useState } from 'react';

const Protocol = function (props) {
  const baseCommands = [
    "set_temperature",
    "set_humidity",
    "set_co2",
    "set_laminar_flow_power",
    "set_hood_light_power",
    "deliver_tray",
    "stow_tray",
    "park_elevator",
    "enable_elevator",
    "pick_tip",
    "eject_tip",
    "park_deck_robot",
    "enable_deck_robot",
    "aspirate",
    "dispense",
    "park_pipetting_robot",
    "add_container",
    "remove_container",
    "get_container",
    "modify_container"
  ]

  return (
    <div className="cm-protocol-container">
      <h2> Protocol Module </h2>

      <div className='cm-protocol-content'>
        
        <div className='protocol-base-container'>
          <h4> Base Commands (drag me)</h4>
          <div className="protocol-base">
          
            {baseCommands.map((command) => {
              return (
                <div key={command} className='prot-base-opt'>
                  {command}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className='protocol-module-container'>
          <h4> Custom Protocol Module </h4>
          <div className="protocol-module">
            <div className="prot-mod-step filled">com1</div>
            <div className="prot-mod-step filled">com2 </div>
            <div className="prot-mod-step filled">com3</div>
            <div className="prot-mod-step filled">com4</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Protocol