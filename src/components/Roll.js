import React, { PropTypes } from 'react'
import Dice from './Dice'

const ladder = {
  '-2': 'Terrible',
  '-1': 'Poor',
  '0': 'Mediocre',
  '1': 'Average',
  '2': 'Fair',
  '3': 'Good',
  '4': 'Great',
  '5': 'Superb',
  '6': 'Fantastic',
  '7': 'Epic',
  '8': 'Legendary'
};

const superlative = (value) => ladder['' + Math.min(Math.max(value, -2), 8)];
const format = (value) => value > 0 ? '+'+value : ''+value;

const Roll = React.createClass({
  render: function() {
    let {values, total} = this.props;
    return (
      <li ref={(ref) => this._li = ref}>
        <div className="roll">{values.map(value => <Dice value={value} />)}</div>
        <div className="roll-total">{format(total)} {superlative(total)}</div>
      </li>
    );
  },

  componentDidMount: function() {
    this._li.scrollIntoView({block: "end", behavior: "smooth"});
  },

  propTypes: {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }
});

export default Roll
