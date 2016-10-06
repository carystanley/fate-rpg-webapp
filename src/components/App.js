import React from 'react'
import '../css/main.css';
import '../css/themes.css';
import '../css/csshake-hard.css';

import AddRoll from '../containers/AddRoll'
// import RollHistory from '../containers/RollHistory'
import RollCurrent from '../containers/RollCurrent'

const App = () => (
  <div>
    <RollCurrent />
    <div id="footer" className="bgc-footer">
      <AddRoll />
    </div>
  </div>
)

export default App
