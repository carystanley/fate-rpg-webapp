import React, { PropTypes } from 'react'
import RollHistoryItem from './RollHistoryItem'

const RollHistory = ({ rollHistory }) => (
  <ul className="list-container">
    {rollHistory.map((roll, idx) =>
      <RollHistoryItem
        key={idx}
        {...roll}
      />
    )}
  </ul>
)

RollHistory.propTypes = {
  rollHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default RollHistory
