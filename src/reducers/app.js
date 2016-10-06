const app = (state = {
  theme: 'Basic'
}, action) => {
  switch (action.type) {
    case 'ADD_ROLL':
      return {
        ...state
      };
    default:
      return state
  }
}

export default app
