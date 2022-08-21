import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

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

const ProtocolOption = function (props) {
  const command = props.command;

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'command',
    item: {
      name: command,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }), [command])
  
  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className='prot-base-opt'>
      {command}
    </div>
  );
}

const ProtocolTarget = function (props) {
  const command = props.command;
  const index = props.index;
  const changeModule = props.changeModule;
  const [noCommand, hasCommand] = ['prot-mod-step unfilled', 'prot-mod-step filled'];

  const [{ isOver, didDrop, canDrop, name }, drop] = useDrop(
    () => ({
      accept: 'command',
      drop: (item) => {
        // console.log(command);
        // console.log(index);
        // console.log(command);
        changeModule(item.name, index);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        name: monitor.getItem(),
        didDrop: monitor.didDrop(),
        canDrop: monitor.canDrop()
      })
    }), [command, changeModule]
  )

  return (
    <div className={command == null ? noCommand : hasCommand}
      ref={drop}
      style={{ backgroundColor: isOver ? "yellow" : null }}>
      {isOver ? name.name : null}
      {command}
    </div>
  );
}

const Protocol = function (props) {
  const [module, setModule] = useState([...Array(10)]);
  function changeModule(newCommand, i) {
    setModule((prevState) =>{
      let prevArr =[...prevState];
      prevArr[i] = newCommand;
      return (prevArr);
    })
  }

  return (
    <div className="cm-protocol-container">
      <h2> Protocol Module </h2>

      <div className='cm-protocol-content'>
        
        <div className='protocol-base-container'>
          <h4> Base Commands (drag me)</h4>
          <div className="protocol-base">
            {baseCommands.map((command) => {
              return (
                <ProtocolOption key={command} command={command} />
              );
            })}
          </div>
        </div>
        
        <div className='protocol-module-container'>
          <h4> Custom Protocol Module </h4>
          <div className="protocol-module">
            {module.map((el, i) => (
              <ProtocolTarget key={`tar-${i}`} command={el} module={module} changeModule={changeModule} index={i} />
            ))}
            
            {/* {didDrop
              ? module.map((command) => {
                console.log(command);
                return (
                  <ProtocolTarget key={`tar-${command}`} command={command}/>
                );
              })
              : null} */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Protocol