import { Box } from 'components/box'

import styles from './decorative-box.css'

export const DecorativeBox = ({ children }) => {
  return (
    <Box
      className={styles.decorativeBox}
      padding={3}
    >
      <Box
        className={styles.boxInner}
        direction={`vertical`}
        justifyContent={`center`}
        relative
      >
        {children}
        <Box
          borders={{
            color: `lightgrey`,
            sides: [`right`, `top`],
            size: `2px`,
          }}
          className={styles.decorationTop}
        />
        <Box
          borders={{
            color: `lightgrey`,
            sides: [`left`, `bottom`],
            size: `2px`,
          }}
          className={styles.decorationBottom}
        />
      </Box>
    </Box>
  )
}