import React, { useState } from 'react';
import addsvg from '../../../images/add.svg';
import rmsvg from '../../../images/remove.svg';
import uniqid from 'uniqid';

const ExpInputText = function (props) {
  const [text, setText] = useState('');
    
  function submitExperiment(e) {
    e.preventDefault();
    if (text.replace(/\s+/g, '') == '') {
      return;
    }
    props.setParentAdding(false);
    props.addParentExps({ name: text, id: uniqid() });
  }
  
  function declineExperiment(e) {
    props.setParentAdding(false);
  }
  
  return (
    <form onSubmit={submitExperiment} className='exps'>
      <input type="text" className='add-exp-text' value={text} onChange={(e) => { setText(e.target.value) }}></input>
      <div className='exp-btn-container'>
        <input type="button" value='X' className='exp-btn decline' onClick={declineExperiment}></input>
        <input type="submit" value='OK' className='exp-btn submit'></input>
      </div>
    </form>
  );  
}

const ExperimentsColumn = function (props) {
  const [adding, setAdding] = useState(false);
  const exps = props.exps;
    
  //PARENT STATE SETTERS
  function setParentAdding(newState) {
    setAdding(newState);
  }
  // wrapper fcts
  function setActive(e) {
    props.setParentActive(e.target.dataset.key);
  }
  
  function RenderExps() {
    return exps.map((exp) => {
      return (
        <div className={exp.id == props.activeExp ? 'exps exp-active' : 'exps exp-inactive'} key={exp.id} data-key={exp.id} onClick={setActive}>
          {exp.name}
          <img src={rmsvg} className='rm-exp' data-key={exp.id} data-exp={exp.name} onClick={(e) => { props.rmParentExps(e); }} />
        </div>
      );});
  }
    
  return (
    <div className='exps-column'>
      {RenderExps()}
      {adding
        ? <ExpInputText setParentAdding={setParentAdding} addParentExps={props.addParentExps}/>
        : <div className="exps exp-inactive add-exp" onClick={() => { setAdding(true); }}><img src={addsvg}/></div>
      }
    </div>
  );
}

export { ExperimentsColumn };