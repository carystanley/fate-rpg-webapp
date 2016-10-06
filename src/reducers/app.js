const initialState = {
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
    default:
      return state
  }
}

export default app
