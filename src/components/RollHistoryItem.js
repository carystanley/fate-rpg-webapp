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

function timeDifference(current, previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.floor(elapsed/1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
         return Math.floor(elapsed/msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay ) {
         return Math.floor(elapsed/msPerHour ) + ' hours ago';
    } else if (elapsed < msPerMonth) {
        return Math.floor(elapsed/msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
        return Math.floor(elapsed/msPerMonth) + ' months ago';
    } else {
        return Math.floor(elapsed/msPerYear ) + ' years ago';
    }
}

const superlative = (value) => ladder['' + Math.min(Math.max(value, -2), 8)];
const format = (value) => value > 0 ? '+'+value : ''+value;

const RollHistoryItem = React.createClass({
  render: function() {
    let {values, total, time} = this.props;
    return (
      <li ref={(ref) => this._li = ref}>
        <div className="roll">{values.map(value => <Dice size="size-medium" value={value} />)}</div>
        <div className="roll-total">{format(total)} {superlative(total)}</div>
        <div className="roll-time">{timeDifference(Date.now(), time)}</div>
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

export default RollHistoryItem
