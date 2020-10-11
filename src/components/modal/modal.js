import { Box } from 'components/box'
import { Svg } from 'components/svg'

import styles from './modal.css'

export const Modal = ({ children, close }) => {
  return (
    <Box
      center
      className={styles.modal}
    >
      <button
        className={styles.button}
        onClick={close}
      >
        <Svg icon={`cross`} />
      </button>
      <div className={styles.container}>
        {children}
      </div>
    </Box>
  )
}
