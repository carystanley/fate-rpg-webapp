import React from 'react'
import '../css/main.css';
import '../css/themes.css';
import '../css/csshake-hard.css';

import Footer from '../containers/Footer'
// import RollHistory from '../containers/RollHistory'
import RollCurrent from '../containers/RollCurrent'
import Theme from '../containers/Theme'

const App = () => (
  <div>
    <Theme />
    <RollCurrent />
    <Footer />
  </div>
)

export default App
