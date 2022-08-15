import React, {useState} from 'react';
import Navbar from './components/navbar.js';
import { ExperimentsView, CalendarView, MimicView, SettingsView, DesignerView } from './components/views.js'

function App(props) {
  const [currTab, setCurrTab] = useState('experiments');
  const currView = 'experiments'
  
  function setParentTab(newTab) {
    setCurrTab(newTab);
  }
  
  console.log(ExperimentsView)
  // function ExperimentsView(props) {
  //   return (<div>EXPERIMENTS</div>);
  // }

  return (
    <div className='content'>
      <Navbar currTab={currTab} setParentState={setParentTab} />
      {currTab == 'experiments' ? <ExperimentsView/> : null}
      {currTab == 'calendar' ? <CalendarView /> : null}
      {currTab == 'mimic' ? <MimicView /> : null}
      {currTab == 'settings' ? <SettingsView /> : null}
      {currTab == 'designer' ? <DesignerView/> : null}
    </div>
  );
}

export default App;