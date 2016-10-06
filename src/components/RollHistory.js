import React, { PropTypes } from 'react'
import RollHistoryItem from './RollHistoryItem'

const RollHistory = ({ history }) => (
  <ul className="list-container bgc-container">
    {history.map((roll, idx) =>
      <RollHistoryItem
        key={idx}
        {...roll}
      />
    )}
  </ul>
)

RollHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default RollHistory
