import React, { useState } from 'react';
import { Typography, TextField, Box, Button, Slide } from '@mui/material';

const Setup = function (props) {
  const [name, setName] = useState('');
  const [temp, setTemp] = useState('');
  const [co2, setCO2] = useState('');
  const [humidity, setHumidity] = useState('');
  const [nameError, setNameError] = useState(false);
  const [tempError, setTempError] = useState(false);
  const [co2Error, setCO2Error] = useState(false);
  const [humidityError, setHumidityError] = useState(false);
  const [envModules, appendEnvModules] = [props.envModules, props.appendEnvModules];

  const handleName = (e) => {
    setName(e.target.value);
    if (name.length < 2) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  const handleTemp = (e) => {
    const value = e.target.value;

    setTemp(value);
    if (isNaN(value)) {
      setTempError(true);
    } else if (parseInt(value) > 300 || parseInt(value) < -100) {
      setTempError(true);
    } else {
      setTempError(false);
    }
  }

  const handleCO2 = (e) => {
    const value = e.target.value;

    setCO2(value);
    if (isNaN(value)) {
      setCO2Error(true);
    } else if (parseInt(value) > 100 || parseInt(value) < 0) {
      setCO2Error(true);
    } else {
      setCO2Error(false);
    }
  }

  const handleHumidity = (e) => {
    const value = e.target.value;

    setHumidity(value);
    if (isNaN(value)) {
      setHumidityError(true);
    } else if (parseInt(value) > 100 || parseInt(value) < 0) {
      setHumidityError(true);
    } else {
      setHumidityError(false);
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (nameError || tempError || co2Error || humidityError) {
      alert('please fix errors');
      return;
    } else if (name == '' || temp == '' || co2 == '' || humidity == '') {
      alert('please fill in all boxes');
      return;
    } else if (envModules.includes(name)) {
      alert('name is already in use');
      return;
    }
    const yes = confirm(`are you sure you want to setup with:\r\ntemp${temp}\r\nco2:${co2}\r\nhumidity:${humidity}`);
    if (!yes) {
      return;
    }
    appendEnvModules({
      name: `ENV - ${name}`,
      temperature: temp,
      co2: co2,
      humidity: humidity
    })
    setName('');
    setTemp(0);
    setCO2(0);
    setHumidity(0);
  }

  return (
    <React.Fragment>
      <Slide direction="up" mountOnEnter unmountOnExit in={true}>
        <Typography variant="h5" align="center" mt={4} mb={4}> Environment Module </Typography>
      </Slide>
      <Slide direction="up" mountOnEnter unmountOnExit in={true}>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3}}>
          <TextField error={nameError} helperText={nameError ? 'atleast two characters' : null} onChange={handleName} sx={{width: '20%'}} label="Module Name" variant="outlined" />
          <TextField error={tempError} helperText={tempError ? 'digits only' : null} onChange={handleTemp} sx={{width: '20%'}} inputMode='numeric' pattern="[0-9]*" label="Temperature (C)" variant="outlined" />
          <TextField error={co2Error} helperText={co2Error ? '0 - 100 %' : null} onChange={handleCO2} sx={{width: '20%'}} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="CO2 (%?)" variant="outlined" />
          <TextField error={humidityError} helperText={humidityError ? '0 - 100 %' : null} onChange={handleHumidity} sx={{ width: '20%' }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Humidity (%)" variant="outlined" />
          <Button variant= 'contained' onClick={handleSubmit} color='secondary'> Submit </Button>
        </Box>
      </Slide>
    </React.Fragment>
  );
}

export default Setup

