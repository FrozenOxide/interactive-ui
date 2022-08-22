import React, { useState } from 'react';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/navbar.js';
import Experiments from './components/experiments/Experiments.js';
import CreateModules from './components/create-modules/CreateModules.js';
import AvailableModules from './components/available-modules/AvailableModules.js';


function App(props) {
  const [currTab, setCurrTab] = useState('monitor');
  const [setupModules, setSetupModules] = useState([]);
  const [deckModules, setDeckModules] = useState([]);
  const [protocolModules, setProtocolModules] = useState([]);

  console.log(deckModules);
  function setParentTab(newTab) {
    setCurrTab(newTab);
  }

  // for use in create modules & avail modules tabs
  const appendSetupModules = function (addState) {
    setSetupModules((prevState) => [...prevState, addState]);
  }
    
  const appendDeckModules = function (addState) {
    setDeckModules((prevState) => [...prevState, addState]);
  }
    
  const appendProtocolModules = function (addState) {
    setProtocolModules((prevState) => [...prevState, addState]);
  }

  function returnCreateModules() {
    return (
      <CreateModules setupModules={setupModules} appendSetupModules={appendSetupModules}
        deckModules={deckModules} appendDeckModules={appendDeckModules}
        protocolModules={protocolModules} appendProtocolModules={appendProtocolModules}/>
    );
  }
  
  function returnAvailableModules() {
    return (
      <AvailableModules setupModules={setupModules}
        deckModules={deckModules} protocolModules ={protocolModules}/>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='content'>
        <Navbar currTab={currTab} setParentState={setParentTab} />
        {currTab == 'monitor' ? <div> Monitor </div>: null}
        {currTab == 'control panel' ? <div> Control Panel </div> : null}
        {currTab == 'designer' ? <Experiments/> : null}
        {currTab == 'calendar' ? <div> Calendar </div> : null}
        {currTab == 'create modules' ? returnCreateModules() : null}
        {currTab == 'available modules' ? returnAvailableModules() : null}
      </div>
    </DndProvider>
  );
}

export default App;