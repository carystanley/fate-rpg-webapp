import { connect } from 'react-redux'
import RollHistoryComponent from '../components/RollHistory'

const mapStateToProps = (state) => ({
  history: state.history
})

const RollHistory = connect(
  mapStateToProps
)(RollHistoryComponent)

export default RollHistory
