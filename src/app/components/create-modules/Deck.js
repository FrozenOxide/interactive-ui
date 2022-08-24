import React, { useState } from 'react';
import { Typography, TextField, Box, Slide, Button } from '@mui/material';

const Deck = function (props) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState('');
  const [nameError, setNameError] = useState(false);
  const [capacityError, setCapacityError] = useState(false);
  const [deckModules, appendDeckModules] = [props.deckModules, props.appendDeckModules];

  const handleName = (e) => {
    setName(e.target.value);
    if (name.length < 2) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  const handleType = (e) => {
    setType(e.target.innerText.toLowerCase());
  }

  
  const handleCapacity = (e) => {
    const value = e.target.value;

    setCapacity(value);
    if (isNaN(value)) {
      setCapacityError(true);
    } else {
      setCapacityError(false);
    }
  }

  function handleCapacityType() {
    if (type == '') {
      return 'item'
    } else if (type == 'bottle') {
      return 'bottle (ml)'
    } else if (type == 'plate') {
      return 'plate (cm²)'
    } else if (type == 'tip box') {
      return 'tipbox (units)'
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name == '' || capacity == '') {
      alert('please fill in all parts of form');
      return;
    } else if (deckModules.includes(name)) {
      alert('name is already in use');
      return;
    }
    const yes = confirm(`are you sure you want to setup with:\r\ntype:${type}\r\ncapacity:${capacity}`);
    if (!yes) {
      return;
    }
    appendDeckModules({
      name: `DECK - ${name}`,
      type: type,
      capacity: capacity,
    })
    setName('');
    setType('');
    setCapacity(0);
  }

  return (
    <React.Fragment>
      <Slide direction="up" mountOnEnter unmountOnExit in={true}>
        <Typography variant="h5" align="center" mt={4} mb={4}> Deck Module </Typography>
      </Slide>
      <Slide direction="up" mountOnEnter unmountOnExit in={true}>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
          <TextField error={nameError} helperText={nameError ? 'atleast two characters' : null} onChange={handleName} sx={{ width: '20%' }} label="Module Name" variant="outlined" />
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
            <Button variant='contained' onClick={handleType} color={type == 'bottle' ? 'success' : 'primary'}> Bottle </Button>
            <Button variant='contained' onClick={handleType} color={type == 'plate' ? 'success' : 'primary'}> Plate </Button>
            <Button variant= 'contained' onClick={handleType} color={type == 'tip box' ? 'success' : 'primary'}> Tip Box </Button>
          </Box>
          {type == ''
            ? null
            :<Slide direction="up" mountOnEnter unmountOnExit in={true}>
              <TextField error={capacityError} helperText={capacityError ? 'digits only' : null} onChange={handleCapacity} sx={{ width: '20%' }} inputMode='numeric' pattern="[0-9]*" label={`Capacity of ${handleCapacityType()}`} variant="outlined" />
            </Slide>}
          {type == ''
            ? null
            : <Slide direction="up" mountOnEnter unmountOnExit in={true}>
              <Button variant='contained' onClick={handleSubmit} color='secondary'> Submit </Button>
            </Slide>}
        </Box>
      </Slide>
    </React.Fragment>
  );
}

export default Deck