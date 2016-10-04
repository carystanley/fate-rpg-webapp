import React from 'react'
import { connect } from 'react-redux'
import { doRoll } from '../actions'

let AddRoll = ({ dispatch }) => {
  return (
    <div>
      <button onClick={e => { dispatch(doRoll()); }}>Roll</button>
    </div>
  )
}
AddRoll = connect()(AddRoll)

export default AddRoll
