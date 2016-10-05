import React, { PropTypes } from 'react'
import Dice from './Dice'

const RollCurrent = React.createClass({
  render: function() {
    let {roll, onRoll} = this.props;
    let values = roll ? roll.values : [0, 0, 0, 0];
    return (
      <div onClick={() => onRoll()} className="mid-center">
        <div className="square">
          {values.map(value => <div className="square-pad"><Dice size="size-100" value={value} /></div>)}
        </div>
      </div>
    );
  },

  propTypes: {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }
});

export default RollCurrent
