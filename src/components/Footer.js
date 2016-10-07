import React from 'react'

let Footer = ({ onRoll, navigate }) => {
  return (
    <div id="footer" className="bgc-footer">
      <button className="Btn" onClick={onRoll}>Roll</button>
      <button className="Btn" onClick={() => { navigate('roll') }}>Current</button>
      <button className="Btn" onClick={() => { navigate('history') }}>History</button>
    </div>
  )
}

export default Footer
