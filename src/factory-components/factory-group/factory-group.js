import { Group } from 'components/group'
import { ComponentLayout } from 'components/component-layout'

export const FactoryGroup = ({ layout, ...props }) => {
  return (
    <ComponentLayout layout={layout}>
      <Group {...props} />
    </ComponentLayout>
  )
}
