import React, {useState} from 'react';
import Navbar from './components/navbar.js';

function App(props) {
  const [tab, setTab] = useState({
    experiments: 'navbar-active',
    calendar: 'navbar-inactive',
    mimic: 'navbar-inactive',
    settings: 'navbar-inactive',
    designer: 'navbar-inactive'
  })
    
  
  function setParentTab(newTab) {
    setTab(newTab);
  }
    
  return (
    <div className='content'>
      <Navbar tab={tab} setParentState={setParentTab}/>
    </div>
  );
}

export default App;