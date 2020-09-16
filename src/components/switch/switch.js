import classNames from 'classnames'

import styles from './switch.css'

export const Switch = ({
  checked,
  onClick,
  type,
}) => {
  return (
    <label className={styles.switch}>
      <input
        checked={checked}
        className={styles.checkbox}
        onClick={onClick}
        type={`checkbox`}
      />
      <span
        className={classNames(styles.slider, {
          [styles.round]: type === `round`,
        })}
      />
    </label>
  )
}
