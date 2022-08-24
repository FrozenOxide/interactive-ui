import React, { useState } from 'react';
import { Card, Typography, Box, CardActionArea, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';


const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4
}));

const SpecialCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1A2027',
  color: '#fff',
  paddingInline: 10,
  margin: 0,
}));

const AvailableModules = function (props) {
  const envModules = props.envModules;
  const deckModules = props.deckModules;
  const protocolModules = props.protocolModules;
  const [details, setDetails] = useState([]);

  const appendDetails = (module) => {
    setDetails((prevState) => {
      return ([...prevState, module.name]);
    })
  }

  const rmDetails = (module) => {
    const index = details.indexOf(module.name);
    if (index > -1) { 
      setDetails((prevState) => {
        const newState = prevState.filter((name) => {
          return (name != module.name)
        })
        return newState;
      })
    }
  }

  const renderEnvModules = function () {
    const showDetails = function (module) {
      return (
        <React.Fragment>
          <CardActionArea mb={0} onClick={() => {rmDetails(module)}}>
            <Typography sx={{marginBlock: 2}} paragraph align="center"> Temperature (C): {module.temperature}</Typography>
            <Typography sx={{marginBlock: 2}} paragraph align="center"> CO2: {module.co2}</Typography>
            <Typography sx={{marginBlock: 2}} paragraph align="center"> Humidity: {module.humidity}</Typography>
          </CardActionArea>
        </React.Fragment>
      );
    }

    const noShowDetails = function (module) { 
      return (
        <React.Fragment>
          <CardActionArea>
            <Typography variant="h5" align="center" mb={0} onClick={() => { appendDetails(module) }}>{module.name}</Typography>
          </CardActionArea>
        </React.Fragment>
      )
    }

    return (
      envModules.map((module, i) => {
        return (
          <CardContainer key={`env-module-${module.name}`}>
            <SpecialCard variant="outlined">
              {details.includes(module.name)
                ? showDetails(module)
                : noShowDetails(module)
              }
            </SpecialCard>
          </CardContainer>
        )
      })
    );
  }

  const renderDeckModules = function () {
    const showDetails = function (module) {
      return (
        <React.Fragment>
          <CardActionArea mb={0} onClick={() => {rmDetails(module)}}>
            <Typography sx={{marginBlock: 2}} paragraph align="center"> Type: {module.type}</Typography>
            <Typography sx={{marginBlock: 2}} paragraph align="center"> Capacity: {module.capacity}</Typography>
          </CardActionArea>
        </React.Fragment>
      );
    }

    const noShowDetails = function (module) { 
      return (
        <React.Fragment>
          <CardActionArea>
            <Typography variant="h5" align="center" mb={0} onClick={() => { appendDetails(module) }}>{module.name}</Typography>
          </CardActionArea>
        </React.Fragment>
      )
    }

    return (
      deckModules.map((module) => {
        return (
          <CardContainer key={`deck-module-${module.name}`}>
            <SpecialCard variant="outlined">
              {details.includes(module.name)
                ? showDetails(module)
                : noShowDetails(module)
              }
            </SpecialCard>
          </CardContainer>
        )
      })
    );
  }

  const renderProtocolModules = function () {
    const showDetails = function (module) {
      const moduleName = module.name;
      return (
        <React.Fragment>
          <CardActionArea mb={0} onClick={() => { rmDetails(module) }}>
            {module.steps.map((step, i) => {
              return (
                <Typography key={`protocol-${moduleName}-${i}`} sx={{ marginBlock: 2 }} paragraph align="center"> Step {i + 1}:  {step}</Typography>
              );
            })}
          </CardActionArea>
        </React.Fragment>
      );
    }

    const noShowDetails = function (module) { 
      return (
        <React.Fragment>
          <CardActionArea>
            <Typography variant="h5" align="center" mb={0} onClick={() => { appendDetails(module) }}>{module.name}</Typography>
          </CardActionArea>
        </React.Fragment>
      )
    }
    
    return (
      protocolModules.map((module) => {
        return (
          <CardContainer key={`protocol-module-${module.name}`}>
            <SpecialCard variant="outlined">
              {details.includes(module.name)
                ? showDetails(module)
                : noShowDetails(module)
              }
            </SpecialCard>
          </CardContainer>
        )
      })
    );
  }

  return (
    <React.Fragment>
      <Slide direction="left" mountOnEnter unmountOnExit in={true}>
        <div>
          <Typography variant="h2" align="center"> Available Modules </Typography>
          <hr />
        </div>
      </Slide>
    
      <Slide direction="up" mountOnEnter unmountOnExit in={true}>
        <div>
          <Typography variant="h3" align="center" mt={5} mb={1}> Environment Modules </Typography>
          {envModules.length == 0
            ? <Typography paragraph align="center"> No available environment modules. </Typography>
            : renderEnvModules()}
      
          <Typography variant="h3" align="center" mt={5} mb={1}> Deck Modules </Typography>
          {deckModules.length == 0
            ? <Typography paragraph align="center"> No available deck modules. </Typography>
            : renderDeckModules()} 

          <Typography variant="h3" align="center" mt={5} mb={1}> Protocol Modules </Typography>
          <CardContainer>
            {protocolModules.length == 0
              ? <Typography paragraph align="center" > No available protocol modules. </Typography>
              : renderProtocolModules()}   
          </CardContainer>
        </div>
      </Slide>
    </React.Fragment>
  );
}

export default AvailableModules;
