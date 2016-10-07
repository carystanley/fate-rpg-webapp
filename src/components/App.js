import React from 'react'
import '../css/main.css';
import '../css/themes.css';
import '../css/csshake-hard.css';

import Footer from './Footer'
import RollHistory from './RollHistory'
import RollCurrent from './RollCurrent'
import Theme from './Theme'

var views = {
  roll: RollCurrent,
  history: RollHistory
};

const App = (props) => {
  let View = views[props.currentView];
  return (
    <div>
      <Theme {...props} />
      <View {...props} />
      <Footer {...props} />
    </div>
  );
}

export default App
