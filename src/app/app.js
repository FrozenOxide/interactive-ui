import * as React from 'react';
import MiniDrawer from './components/MiniDrawer';
import CreateModules from './components/create-modules/CreateModules';
import AvailableModules from './components/available-modules/AvailableModules';
import { CssBaseline } from '@mui/material';
import { render } from 'react-dom';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


export default function App(props) {
  // current tab/page
  const [currPage, setCurrPage] = React.useState('Monitor');
  // modules
  const [envModules, setEnvModules] = React.useState([]);
  const [deckModules, setDeckModules] = React.useState([]);
  const [protocolModules, setProtocolModules] = React.useState([]);


  const RenderCreateModules = () => {
    return (
      <CreateModules envModules={envModules} setEnvModules={setEnvModules}
        deckModules={deckModules} setDeckModules={setDeckModules}
        protocolModules={protocolModules} setProtocolModules={setProtocolModules} />
    );
  }

  const RenderAvailableModules = () => {
    return (
      <AvailableModules envModules={envModules} deckModules={deckModules}
        protocolModules={protocolModules} />
    );
  }

  const handleContent = () => {
    if (currPage == 'Monitor') {
      return ('Monitor');
    } else if (currPage == 'Control Panel') {
      return ('Control Panel');
    } else if (currPage == 'Designer') {
      return ('Designer');
    } else if (currPage == 'Calendar') {
      return ('Calendar');
    } else if (currPage == 'Create Modules') {
      return (RenderCreateModules());
    } else if (currPage == 'Available Modules') {
      return (RenderAvailableModules());
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <CssBaseline/>
      <MiniDrawer currPage={currPage} setCurrPage={setCurrPage} handleContent={handleContent} />
    </DndProvider>
  );
}