import { Polaroid } from 'components/polaroid'

export const ReceptionPolaroid = ({ width }) => {
  return (
    <Polaroid
      image={{
        ratio: [1400, 933],
        src: `aclumlow-wedding-barn.jpg`,
      }}
      rotate={-2}
      style={{
        width,
      }}
      text={`Alcumlow Wedding Barn`}
    />
  )
}
