
export const doRoll = () => ({
  type: 'ADD_ROLL'
});

export const setTheme = (theme) => ({
  type: 'SET_THEME',
  theme
});

export const navigate = (view) => ({
  type: 'NAVIGATE',
  view
});