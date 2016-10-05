import { connect } from 'react-redux'
import { doRoll } from '../actions'
import RollCurrentComponent from '../components/RollCurrent'

const mapStateToProps = (state) => ({
  roll: state.rollHistory[state.rollHistory.length-1]
})

const mapDispatchToProps = ({
  onRoll: doRoll
})

const RollCurrent = connect(
  mapStateToProps,
    mapDispatchToProps
)(RollCurrentComponent)

export default RollCurrent
