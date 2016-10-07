import React from 'react'

let Footer = ({ onRoll }) => {
  return (
    <div id="footer" className="bgc-footer">
      <button className="Btn" onClick={onRoll}>Roll</button>
    </div>
  )
}

export default Footer
