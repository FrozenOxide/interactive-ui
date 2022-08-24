import React, { useState } from 'react';
import Type from './Type';
import Environment from './Environment';
import Deck from './Deck';
import Protocol from './Protocol';

const CreateModules = function (props) {
  const [type, setType] = useState('');
  const [envModules, setEnvModules] = [props.envModules, props.setEnvModules];
  const [deckModules, setDeckModules] = [props.deckModules, props.setDeckModules];
  const [protocolModules, setProtocolModules] = [props.protocolModules, props.setProtocolModules];

  const appendEnvModules = (addModule) => {
    setEnvModules((prevState) => {
      return [...prevState, addModule];
    })
  }

  const appendDeckModules = (addModule) => {
    setDeckModules((prevState) => {
      return [...prevState, addModule];
    })
  };
  
  const appendProtocolModules = (addModule) => {
    setProtocolModules((prevState) => {
      return [...prevState, addModule];
    })
  };

  return (
    <React.Fragment>
      <Type type={type} setType={setType} />
      <hr/>
      {type == 'environment' ? <Environment envModules={envModules} appendEnvModules={appendEnvModules} /> : null}
      {type == 'deck' ? <Deck deckModules={deckModules} appendDeckModules={appendDeckModules} /> : null}
      {type == 'protocol' ? <Protocol protocolModules={protocolModules} appendProtocolModules={appendProtocolModules} /> : null}
    </React.Fragment>
  );
}

export default CreateModules