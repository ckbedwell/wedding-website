import { Link } from 'components/link'
import { Text } from 'components/text'

import styles from './button.css'

export const Button = ({
  children,
  to,
  ...rest
}) => {
  const props = {
    className: styles.button,
    ...rest,
  }

  if (to) {
    return (
      <Link
        to={to}
        {...props}
      >
        {renderContent()}
      </Link>
    )
  }

  return (
    <button {...props}>
      {renderContent()}
    </button>
  )

  function renderContent() {
    return (
      <Text fontWeight={700}>
        {children}
      </Text>
    )
  }
}