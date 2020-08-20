import { Polaroid } from 'components/polaroid'

export const ChurchPolaroid = ({ width }) => {
  return (
    <Polaroid
      image={{
        ratio: [1920, 1440],
        src: `st-andrews-church.jpg`,
      }}
      rotate={-2}
      style={{
        width,
      }}
      text={`St Andrews Church`}
    />
  )
}
