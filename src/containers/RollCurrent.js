import { connect } from 'react-redux'
import { doRoll } from '../actions'
import RollCurrentComponent from '../components/RollCurrent'

const mapStateToProps = (state) => ({
  roll: state.history[state.history.length-1]
})

const mapDispatchToProps = ({
  onRoll: doRoll
})

const RollCurrent = connect(
  mapStateToProps,
  mapDispatchToProps
)(RollCurrentComponent)

export default RollCurrent
