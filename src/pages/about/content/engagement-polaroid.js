import { Polaroid } from 'components/polaroid'

export const EngagementPolaroid = ({ width }) => {
  return (
    <Polaroid
      filter={false}
      image={{
        ratio: [1920, 2560],
        src: `chris-and-em-engaged.jpg`,
      }}
      rotate={-1}
      style={{
        width,
      }}
    />
  )
}
