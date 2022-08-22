import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import clsvg from '../../../images/remove.svg';

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

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'command-reorder',
    item: {
      name: command,
      index: index,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }), [command])

  const [{ isOver, didDrop, canDrop, name, initialPos }, drop] = useDrop(
    () => ({
      accept: 'command-reorder',
      drop: (item) => {
        console.log(item.index);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        name: monitor.getItem(),
        didDrop: monitor.didDrop(),
        canDrop: monitor.canDrop(),
        initialPos: monitor.getInitialClientOffset()
      })
    })
  )

  function attachRef(el) {
    drag(el);
    drop(el);
  }


  return (
    <div className='prot-mod-step' ref={drag} data-ind={index}>
      {command}
    </div>


  );
}

const ProtocolBtns = function (props) {
  const module = props.module;
  const appendProtocolModules = props.appendProtocolModules;
  const setModule = props.setModule;
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name == '') {
      alert('you must enter a valid name');
      return;
    }
    if (module.length == 0) {
      alert('you must make a custom protocol to save');
      return;
    }
    const yes = confirm(`are you sure ?`);
    if (!yes) {
      return;
    }
    appendProtocolModules({
      name: name,
      steps: module,
    })
    setName('');
    setModule([]);
  }
  
  return (
    <div className='btns-container'>
      <form className='cm-protocol-form' onSubmit={handleSubmit}>
        
        <label htmlFor="mod-name"> Module Name
          <input type="text" className='cm-protocol-item' name="mod-name" value={name} onChange={(e) => { setName(e.target.value) } } />
        </label>
        <input type="submit" value="Add Module" className='cm-protocol-submit'/>
      </form>
    </div>
  );
}


const Protocol = function (props) {
  const [module, setModule] = useState([]);
  const appendProtocolModules = props.appendProtocolModules;

  function appendToModule(newState) {
    setModule((prevState) => {
      return [...prevState, newState];
    })
  }


  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ['command', 'command-reorder'],
      drop: (item, monitor) => {
        const type = monitor.getItemType();

        if (type == 'command') {
          appendToModule(item.name); 
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      })
    })
  )

  return (
    <div className="cm-protocol-container">
      <h2> Protocol Module </h2>

      <ProtocolBtns module={module} appendProtocolModules={appendProtocolModules} setModule={setModule} />
      <div className='cm-protocol-content'>
        
        <div className='protocol-base-container'>
          <h4> Base Commands (drag me)</h4>
          <div className="protocol-base" >
            {baseCommands.map((command, i) => {
              return (
                <ProtocolOption key={command} command={command} index={i} />
              );
            })}
          </div>
        </div>
        
        <div className='protocol-module-container'>
          <h4> Custom Protocol Module </h4>
          <div className="protocol-module" ref={drop}>
            {module.length != 0
              ?
              module.map((el, i) => (
                <ProtocolTarget command={el} index={i} key={`tar-${el}`}/>
              ))
              : null}
          </div>
          <button className='clear' onClick={() => { setModule([])}} > Clear </button>
        </div>
      </div>
    </div>
  );
}

export default Protocol