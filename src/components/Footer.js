import React from 'react'
import cx from 'classnames'

let Footer = ({ onRoll, navigate, currentView }) => {
  return (
    <div id="footer" className="bgc-footer">
      <ul className="navigation">
        <li className={cx({selected: currentView === 'roll'})} onClick={() => { navigate('roll') }}>Current</li>
        <li className={cx({selected: currentView === 'history'})} onClick={() => { navigate('history') }}>History</li>
      </ul>
    </div>
  )
}

export default Footer
