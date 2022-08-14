import React, {useState} from 'react';
import Navbar from './components/navbar.js';

function App(props) {
  const [currTab, setCurrTab] = useState('experiments');

  const [col, setCol] = useState({
    col: true,
  })
  
  function setParentTab(newTab) {
    setCurrTab(newTab);
  }
  
  return (
    <div className='content'>
      <Navbar currTab={currTab} setParentState={setParentTab}/>
    </div>
  );
}

export default App;