import React from 'react'
import '../css/main.css';
import '../css/csshake-hard.css';

import AddRoll from '../containers/AddRoll'
// import RollHistory from '../containers/RollHistory'
import RollCurrent from '../containers/RollCurrent'

const App = () => (
  <div>
    <RollCurrent />
    <div id="footer">
      <AddRoll />
    </div>
  </div>
)

export default App
