import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, margin } from '@mui/system';
import { ButtonGroup } from '@mui/material';
import { Button, Slide } from '@mui/material';



const Type = function (props) {
  const [type, setType] = [props.type, props.setType];
  const active = 'success';
  const inactive = 'primary';

  function handleType(e) {
    setType(e.target.innerText.toLowerCase());
  }

  const handleVariant = () => {

  }

  return (
    <React.Fragment>
      <Slide direction="left" mountOnEnter unmountOnExit in={true}>
        <div>
          <Typography variant="h4" align="center"> Module Type </Typography>
          <Box display="flex" justifyContent="center" sx={{mt: 4, gap: 3}}>
            <Button variant={type == 'environment' ? 'contained' : 'outlined'} onClick={handleType} color={type == 'environment' ? active : inactive}>Environment</Button>
            <Button variant={type == 'deck' ? 'contained' : 'outlined'} onClick={handleType} color={type == 'deck' ? active : inactive}>Deck</Button>
            <Button variant={type == 'protocol' ? 'contained' : 'outlined'} onClick={handleType} color={type == 'protocol' ? active : inactive}>Protocol</Button>
          </Box>
        </div>
      </Slide>
    </React.Fragment>
  );
}

export default Type