const initialState = {
  currentView: 'roll',
  theme: 'Basic',
  choices: ['Basic', 'Vampire']
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.theme
      };
    case 'NAVIGATE':
      return {
        ...state,
        currentView: action.view
      };
    default:
      return state
  }
}

export default app
