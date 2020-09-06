import { Box } from 'components/box'
import { Text } from 'components/text'

import styles from './textarea.css'

export const Textarea = ({
  label,
  onChange,
  value,
}) => {
  return (
    <Text
      family="primary"
      size={4}
    >
      <Box marginBottom={3}>
        <label>
          {label}
        </label>
      </Box>
      <textarea
        className={styles.textarea}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </Text>
  )
}
