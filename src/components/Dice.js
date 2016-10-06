import React from 'react'
import cx from 'classnames'

const Dice = ({ value, shake, size }) => (
  <div className={cx('dice bgc-dice', size, 'value' + value, {'shake-hard shake-constant': shake})}>
    <div className="vert bgc-diceface" />
    <div className="horz bgc-diceface" />
  </div>
)

export default Dice