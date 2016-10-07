import { connect } from 'react-redux'
import { doRoll } from '../actions'
import AppComponent from '../components/App'

const mapStateToProps = (state) => ({
  roll: state.history[state.history.length-1],
  history: state.history,
  theme: state.app.theme,
  currentView: state.app.currentView
})

const mapDispatchToProps = ({
  onRoll: doRoll
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
