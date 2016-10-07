import React, { PropTypes } from 'react'

class Theme extends React.Component {
  static propTypes = {
    theme: PropTypes.string
  }
  static defaultProps = {
    theme: 'Basic'
  }

  componentDidMount() {
    document.body.className = this.props.theme;
  }

  componentWillReceiveProps(nextProps) {
    document.body.className = nextProps.theme;
  }

  componentWillUnmount() {
    document.body.className = '';
  }

  render() {
    return null;
  }
}

export default Theme
