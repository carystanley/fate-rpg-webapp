import React from 'react'
import cx from 'classnames'

const Themes = ({ app, setTheme }) => (
  <ul className="choice-container">
    {app.choices.map((theme, idx) =>
      <li className={cx({selected: app.theme === theme})} onClick={() => { setTheme(theme); }}>{theme}</li>
    )}
  </ul>
)

export default Themes
