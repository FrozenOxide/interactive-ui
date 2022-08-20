import React, { useState } from 'react';
import Type from './Type';
import Setup from './Setup';
import Deck from './Deck';
import Protocol from './Protocol';

const CreateModules = function (props) {
  const [type, setType] = useState('');
  const [setupModules, appendSetupModules] = [props.setSetupModules, props.appendSetupModules];
  const [deckModules, appendDeckModules] = [props.deckModules, props.appendDeckModules];
  const [protocolModules, setProtocolModules] = [props.protocolModules, props.appendProtocolModules];


  return (
    <div className='cm-container'>
      <Type type={type} setType={setType} />
      {type == 'Setup' ? <Setup appendSetupModules={appendSetupModules} /> : null}
      {type == 'Deck' ? <Deck appendDeckModules={appendDeckModules} /> : null}
      {type == 'Protocol' ? <Protocol /> : null}
      <hr />
    </div>
  );
}

export default CreateModules