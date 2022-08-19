import React, { useState } from 'react';

const Type = function (props) {
  const [type, setType] = [props.type, props.setType];
  const active = 'cm-type cm-type-active';
  const inactive = 'cm-type cm-type-inactive';

  function handleType(e) {
    setType(e.target.innerText);
  }


  return (
    <div className='cm-type-container'>
      <h2> Module Type </h2>
      <div className='cm-type-btns'>
        <button className={type == 'Setup' ? active : inactive} onClick={handleType}> Setup </button>
        <button className={type == 'Deck' ? active : inactive} onClick={handleType} > Deck </button>
        <button className={type == 'Protocol' ? active : inactive} onClick={handleType}> Protocol </button>
      </div>
    </div>
  );
}

export default Type