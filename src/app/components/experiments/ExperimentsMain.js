import React, { useState } from 'react';
import { ExperimentsColumn } from './ExperimentsColumn.js';
import { ExperimentsContent } from './ExperimentsContent.js';


const Experiments = function (props) {
  // one exp in "experiments" array -> {name: '', id: ''}
  const [experiments, setExperiments] = useState([]);
  const [activeExp, setActiveExp] = useState('');

  function addParentExps(addState) {
    setExperiments((prevState) => ([ ...prevState, addState]));
  }

  function rmParentExps(e) {
    const rmID = e.target.dataset.key;
    const expName = e.target.dataset.exp;
    let confirmSelection = confirm(`Are you sure you want to delete experiment: ${expName}?`);
    
    if (confirmSelection) {
      setExperiments((prevState) => (prevState.filter((elem) => (elem.id != rmID))));  
    } else {
      return;
    }
  }

  function setParentActive(newState) {
    setActiveExp(newState);
  }

  return (
    <div className='exps-container'>
      <ExperimentsColumn addParentExps={addParentExps} rmParentExps={rmParentExps} setParentActive={setParentActive} exps={experiments} activeExp={activeExp} />
      <ExperimentsContent activeExp={activeExp}/>
    </div>
  );
}

export default Experiments;