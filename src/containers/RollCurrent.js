import { connect } from 'react-redux'
import RollCurrentComponent from '../components/RollCurrent'

const mapStateToProps = (state) => ({
  roll: state.rollHistory[state.rollHistory.length-1]
})

const RollCurrent = connect(
  mapStateToProps
)(RollCurrentComponent)

export default RollCurrent
