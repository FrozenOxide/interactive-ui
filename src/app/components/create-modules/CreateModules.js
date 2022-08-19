import React, { useState } from 'react';
import Type from './Type';
import Setup from './Setup';
import Deck from './Deck';
import Protocol from './Protocol';
import AvailableModules from './AvailableModules';

const CreateModules = function (props) {
  const [type, setType] = useState('');
  const [setupModules, setSetupModules] = useState([]);
  const [deckModules, setDeckModules] = useState([]);
  const [protocolModules, setProtocolModules] = useState([]);
    
  const appendSetupModules = function (addState) {
    setSetupModules((prevState) => [...prevState, addState]);
  }
    
  const appendDeckModules = function (addState) {
    setDeckModules((prevState) => [...prevState, addState]);
  }
    
  const appendProtocolModules = function (addState) {
    setProtocolModules((prevState) => [...prevState, addState]);
  }

  return (
    <div className='cm-container'>
      <Type type={type} setType={setType} />
      {type == 'Setup' ? <Setup appendSetupModules={appendSetupModules} /> : null}
      {type == 'Deck' ? <Deck /> : null}
      {type == 'Protocol' ? <Protocol /> : null}
      <hr />
      <AvailableModules setupModules={setupModules} deckModules={deckModules} protocolModules={protocolModules} />
    </div>
  );
}

export default CreateModules