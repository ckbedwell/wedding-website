import { Polaroid } from 'components/polaroid'

export const ParentsPolaroid = ({ width }) => {
  return (
    <Polaroid
      image={{
        ratio: [1200, 1600],
        src: `paul-and-mandi-4.jpg`,
      }}
      rotate={-2}
      style={{
        width,
      }}
      text={`Mandi and Paul with their wedding party`}
    />
  )
}
