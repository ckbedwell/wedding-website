import { Box } from 'components/box'
import { Text } from 'components/text'

import styles from './select.css'

export const Select = ({
  label,
  options,
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
      <select
        className={styles.select}
        onChange={e => onChange(e.target.value)}
        value={value}
      >
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    
    </Text>
  )
}
