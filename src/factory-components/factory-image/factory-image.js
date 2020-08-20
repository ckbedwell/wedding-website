import { Image } from 'components/image'
import { ComponentLayout } from 'components/component-layout'

export const FactoryImage = ({ content, layout }) => {
  const {
    alt,
    src,
  } = content

  return (
    <ComponentLayout layout={layout}>
      <Image
        alt={alt}
        src={src}
      />
    </ComponentLayout>
  )
}
