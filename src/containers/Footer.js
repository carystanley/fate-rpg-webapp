import React from 'react'
import { connect } from 'react-redux'
import { doRoll } from '../actions'

let Footer = ({ dispatch }) => {
  return (
    <div id="footer" className="bgc-footer">
      <button onClick={e => { dispatch(doRoll()); }}>Roll</button>
    </div>
  )
}
Footer = connect()(Footer)

export default Footer
