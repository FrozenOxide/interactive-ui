import React, { useState } from 'react';

const Deck = function (props) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState(0);
  const appendDeckModules = props.appendDeckModules;
  const active = 'cm-deck-item cm-deck-active';
  const inactive = 'cm-deck-item cm-deck-inactive';

  function handleCapacity() {
    if (type == '') {
      return 'item'
    } else if (type == 'bottle') {
      return 'bottle (ml)'
    } else if (type == 'plate') {
      return 'volume (cm²)'
    } else if (type == 'tipbox') {
      return 'tipbox (units)'
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name == '') {
      alert('you must enter a valid name');
      return;
    }
    const yes = confirm(`are you sure you want to setup with:\r\ntype:${type}\r\ncapacity:${capacity}`);
    if (!yes) {
      return;
    }
    appendDeckModules({
      name: name,
      type: type,
      capacity: capacity,
    })
    setName('');
    setType('');
    setCapacity(0);
  }

  return (
    <div className='cm-deck-container' onSubmit={handleSubmit}>
      <h2> Deck Item Module </h2>
      <form className='cm-deck-form' >
        
        <label htmlFor="mod-name"> Module Name
          <input type="text" className='cm-deck-item' name="mod-name" value={name} onChange={(e) => { setName(e.target.value) } } />
        </label>

        <label htmlFor="item-type"> Item Type

          <div className='cm-deck-btns'>
            <input type="button" name="item-type" className={type =='bottle' ? active : inactive} value='Bottle' onClick={(e) => { setType(e.target.value.toLowerCase()) }} ></input>
            <input type="button" name="item-type" className={type =='plate' ? active : inactive} value='Plate' onClick={(e) => { setType(e.target.value.toLowerCase()) }}></input>
            <input type="button" name="item-type" className={type == 'tipbox' ? active : inactive} value='TipBox' onClick={(e) => { setType(e.target.value.toLowerCase()) }}></input>
          </div>
        </label>


        <label htmlFor="capacity">Capacity of {handleCapacity()}
          <input type="number" className='cm-deck-item' name="capacity" min="-100" max="100" value={capacity} onChange={(e) => { setCapacity(e.target.value) } } />
        </label>

        <input type="submit" value="Add Module" className='cm-deck-submit'/>
      </form>
    </div>
  );
}

export default Deck