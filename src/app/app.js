import React, {useState} from 'react';
import Navbar from './components/navbar.js';
import Experiments from './components/experiments/Experiments.js';
import CreateModules from './components/create-modules/CreateModules.js';

function App(props) {
  const [currTab, setCurrTab] = useState('monitor');
  const currView = 'experiments'
  
  function setParentTab(newTab) {
    setCurrTab(newTab);
  }
  
  return (
    <div className='content'>
      <Navbar currTab={currTab} setParentState={setParentTab} />
      {currTab == 'monitor' ? <div> Monitor </div>: null}
      {currTab == 'control panel' ? <div> Control Panel </div> : null}
      {currTab == 'designer' ? <Experiments/> : null}
      {currTab == 'calendar' ? <div> Calendar </div> : null}
      {currTab == 'create modules' ? <CreateModules/> : null}
    </div>
  );
}

export default App;