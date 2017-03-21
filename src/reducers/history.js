const roll = (state, action) => {
  switch (action.type) {
    case 'ADD_ROLL':
      let total = 0;
      let values = [];
      for (let x = 0; x < 4; x++) {
        let value = Math.floor(Math.random() * 3) - 1;
        values.push(value);
        total += value;
      }
      return {
        values,
        total,
        time: Date.now()
      }
    default:
      return state
  }
}

const history = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROLL':
      return [
        ...state,
        roll(undefined, action)
      ]
    default:
      return state
  }
}

export default history
