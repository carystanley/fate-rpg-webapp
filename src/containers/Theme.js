import { connect } from 'react-redux'
import React, { PropTypes } from 'react'

class Theme extends React.Component {
  static propTypes = {
    isDark: PropTypes.string
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

const mapStateToProps = (state) => ({
  theme: state.app.theme
})

Theme = connect(
  mapStateToProps
)(Theme)

export default Theme
