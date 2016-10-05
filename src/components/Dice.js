import React from 'react'
import cx from 'classnames'

const Dice = ({ value, shake, size }) => (
  <div className={cx('dice', size, 'value' + value, {'shake-hard shake-constant': shake})}>
    <div className="vert" />
    <div className="horz" />
  </div>
)

export default Dice