import classNames from 'classnames'

import { Box } from 'components/box'
import { Text } from 'components/text'

import styles from './textarea.css'

export const Textarea = ({
  className,
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
        className={classNames(styles.textarea, {
          [className]: Boolean(className),
        })}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </Text>
  )
}
