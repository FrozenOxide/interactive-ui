import React, { useState } from 'react';
import addsvg from './images/add.svg';

const ExpInputText = function (props) {
  const [text, setText] = useState('');
    
  function submitExperiment(e) {
    e.preventDefault();
    if (text.replace(/\s+/g, '') == '') {
      return;
    }
    props.parentSetAddingExp(false);
    props.parentAddExps(text);
  }
    
  return (
    <form onSubmit={submitExperiment}>
      <input type="text" className='add-exp-text' value={text} onChange={(e) => {setText(e.target.value)}}></input>
      <input type="submit" value='OK'></input>
    </form>
  );  
}

const ExperimentsColumn = function (props) {
  const [addingExp, setAddingExp] = useState(false);
  const [exps, setExps] = useState([]);

  //PARENT STATE SETTERS
  function parentSetAddingExp(newState) {
    setAddingExp(newState);
  }
    
  function parentAddExps(addState) {
    setExps((prevState) => ([ ...prevState, addState]));
  }

  return (
    <div className='add-exp-container'>
      {exps.map((exp, i) => {
        return (<div className='exps' key={i}>{exp}</div>);
      })}
      {addingExp
        ? <ExpInputText parentSetAddingExp={parentSetAddingExp} parentAddExps={parentAddExps} />
        : <img src={addsvg} className='add-exp' onClick={() => { setAddingExp(true) }}></img>
      }
    </div>
  );
}

const Experiments = function (props) {
  const [experiments, setExperiments] = useState([]);
    
  function parentSetExperiments(newState) {
    setExperiments(newState);
  }

  return (
    <div className='exp-container'>
      <ExperimentsColumn setParentState={parentSetExperiments} />
      <div className='main-exp-container'>
      </div>
    </div>
  );
}

export default Experiments;