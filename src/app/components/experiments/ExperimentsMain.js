import React, { useState } from 'react';
import { ExperimentsColumn } from './ExperimentsColumn.js';


const Experiments = function (props) {
  // one exp in "experiments" array -> {name: '', id: ''}
  const [experiments, setExperiments] = useState([]);
  const [activeExp, setActiveExp] = useState('');

  function addParentExps(addState) {
    setExperiments((prevState) => ([ ...prevState, addState]));
  }

  function rmParentExps(rmID) {
    setExperiments((prevState) => (prevState.filter((elem) => (elem.id != rmID))))  
  }

  function setParentActive(newState) {
    setActiveExp(newState);
  }

  return (
    <div className='exp-container'>
      <ExperimentsColumn addParentExps={addParentExps} rmParentExps={rmParentExps} setParentActive={setParentActive} exps={experiments} activeExp={activeExp} />
      <div className='main-exp-container'>
      </div>
    </div>
  );
}

export default Experiments;