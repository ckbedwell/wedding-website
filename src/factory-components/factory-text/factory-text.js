import { Text } from 'components/text'
import { ComponentLayout } from 'components/component-layout'

export const FactoryText = ({
  content = {},
  layout,
  styling = {},
}) => {
  const {
    html,
  } = content

  const {
    color,
    family,
    size,
    textAlign,
  } = styling

  return (
    <ComponentLayout layout={layout}>
      <Text
        color={color}
        family={family}
        size={size}
        textAlign={textAlign}
      >
        {html}
      </Text>
    </ComponentLayout>
  )
}
