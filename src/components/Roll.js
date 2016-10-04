import React, { PropTypes } from 'react'

const Roll = React.createClass({
  render: function() {
    let {values, total} = this.props;
    return (
      <li ref={(ref) => this._li = ref}>
        <div className="roll">{values.map(value => <div className={'dice value' + value}><div className="vert" /><div className="horz" /></div>)}</div>
        <div>Total: {total}</div>
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
