import React, { PropTypes } from 'react'
import Dice from './Dice'

const RollCurrent = React.createClass({
  render: function() {
    let {roll} = this.props;
    let {shake} = this.state;
    let values = roll && !shake ? roll.values : [0, 0, 0, 0];
    return (
      <div onMouseDown={this.handlePressStart} onTouchStart={this.handlePressStart} onMouseUp={this.handlePressStop} onMouseLeave={this.handlePressStop} onTouchEnd={this.handlePressStop} className="mid-center">
        <div className="square">
          {values.map(value => <div className="square-pad"><Dice size="size-100" value={value} shake={shake} /></div>)}
        </div>
      </div>
    );
  },

  handlePressStart: function () {
    this.setState({shake: true});
  },

  handlePressStop: function () {
    let {shake} = this.state;
    if (shake) {
      this.setState({shake: false});
      this.props.onRoll();
    }
  },

  getInitialState: () => ({
    shake: false
  }),

  propTypes: {
    roll: PropTypes.object.isRequired,
    onRoll: PropTypes.func.isRequired
  }
});

export default RollCurrent
