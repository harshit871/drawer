import './App.css';
import { useState } from 'react';
import DrawerBtn from './components/DrawerBtn';
import Drawer from './components/Drawer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="App">
      <div>{isDrawerOpen ? 'Open' : 'Closed'}</div>

      <DrawerBtn  onClick={toggleDrawer} />

      <Drawer isOpen={isDrawerOpen}/>
    </div>
  );
}

export default App;
