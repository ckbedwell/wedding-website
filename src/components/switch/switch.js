import classNames from 'classnames'

import styles from './switch.css'

export const Switch = ({
  checked,
  onChange,
  type,
  ...rest
}) => {
  return (
    <label
      className={styles.switch}
      {...rest}
    >
      <input
        checked={checked}
        className={styles.checkbox}
        onChange={onChange}
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
