import React from 'react'
import cx from 'classnames'

const Dice = ({ value, shake }) => (
  <div className={cx('dice', 'value' + value, {'shake-hard shake-constant': shake})}>
    <div className="vert" />
    <div className="horz" />
  </div>
)

export default Dice