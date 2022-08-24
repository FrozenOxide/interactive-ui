import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import rmsvg from '../../../images/remove.svg';
import { Typography, Box, TextField, Button } from '@mui/material';
import { Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { borders } from '@mui/system';
import { Slide } from '@mui/material';

const ItemOption = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: "#ffa726",
  }
}));

const ItemTarget = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffa726",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const baseCommands = [
  "set_temperature",
  "set_humidity",
  "set_co2",
  "set_laminar_flow_power",
  "set_hood_light_power",
  "deliver_tray",
  "stow_tray",
  "park_elevator",
  "enable_elevator",
  "pick_tip",
  "eject_tip",
  "park_deck_robot",
  "enable_deck_robot",
  "aspirate",
  "dispense",
  "park_pipetting_robot",
  "add_container",
  "remove_container",
  "get_container",
  "modify_container"
]
  
const ProtocolOption = function (props) {
  const command = props.command;

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'command',
    item: {
      name: command,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }), [command])
  
  return (
    <ItemOption variant="outlined" ref={drag} sx={{opacity: isDragging ? 0.5 : 1}}>
      {command}
    </ItemOption>
  );
}



export default function Protocol(props) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [module, setModule] = useState([]);
  const [protocolModules, appendProtocolModules] = [props.protocolModules, props.appendProtocolModules];

  const handleName = (e) => {
    setName(e.target.value);
    if (name.length < 2) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  const handleSave = () => {
    if (name == '') {
      alert('Please enter a valid name');
      return;
    } else if (protocolModules.includes(name)) {
      alert('name is already in use');
      return;
    }
    if (confirm('Are you sure you want to save this protocol module?')) {
      appendProtocolModules({
        name: `PROT - ${name}`,
        steps: module,
      });
      setModule([]);
    }
  }

  const [{ isOver, didDrop, canDrop, commandName, initialPos }, drop] = useDrop(
    () => ({
      accept: 'command',
      drop: (item) => {
        setModule((prevState) => {
          return [...prevState, item.name];
        })
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        commandName: monitor.getItem(),
        didDrop: monitor.didDrop(),
        canDrop: monitor.canDrop(),
        initialPos: monitor.getInitialClientOffset()
      })
    })
  );

  return (
    <React.Fragment>
      <Slide direction="up" mountOnEnter unmountOnExit in={true}>
        <Typography variant="h5" align="center" mt={4} mb={4}> Protocol Module </Typography>
      </Slide>
      
      <Slide direction="up" mountOnEnter unmountOnExit in={true}>
        <div>
          <Box sx={{ display: 'flex', flexDirection: 'column', mb: 4, alignItems: 'center'}}>

            {/* lhs box */}
            <TextField error={nameError} helperText={nameError ? 'atleast two characters' : null} onChange={handleName} sx={{ width: '20%' }} label="Module Name" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <Stack spacing={1} sx={{height: "50vh", width: "30vw", overflowY: "scroll", userSelect: "none", border: 1, borderRadius: 2}}>
              {baseCommands.map((command) => {
                return (<ProtocolOption key={command} command={command} />);
              })}
            </Stack>
              
            {/* rhs box */}
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
              <Stack sx={{height: "50vh", width: "30vw", overflowY: "scroll", userSelect: "none", border: 1, borderRadius: 2, mb: 2}} ref={drop}>
                {module.length != 0
                  ? module.map((command, i) => (
                    <ItemTarget variant="outlined" command={command} index={i} key={`${command}-target`}>
                      {command}
                    </ItemTarget>
                  ))
                  : null}
              </Stack>
              <Box sx={{display: 'flex', justifyContent: 'center', gap: 2}}>
                <Button variant='contained' onClick={handleSave} color='secondary'> Save </Button>
                <Button variant='contained' onClick={() => { setModule([]); }} > Clear </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </Slide>
        

    </React.Fragment>
  );
}