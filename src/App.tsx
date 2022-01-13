import React from 'react';
import { generatePallete } from './colorHelper';
import Pallete from './Pallete';
import seedColors from './seedColors';

function App() {
  console.log(generatePallete(seedColors[4]))
  return (
    <div className="App">
      <Pallete pallete = {generatePallete(seedColors[4])}/>
    </div>
  );
}

export default App;
