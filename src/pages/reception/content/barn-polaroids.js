import { Polaroid } from 'components/polaroid'

export const BarnPolaroids = () => {
  return (
    <>
      <Polaroid
        image={{
          ratio: [1729, 1297],
          src: `aclumlow-wedding-barn-1.jpg`,
        }}
        rotate={-3}
        text={`Beautiful and cozy`}
      />
      <Polaroid
        image={{
          ratio: [1729, 1297],
          src: `aclumlow-wedding-barn-2.jpg`,
        }}
        rotate={1}
        text={`Very important bar.`}
      />
      <Polaroid
        image={{
          ratio: [1664, 1248],
          src: `aclumlow-wedding-barn-3.jpg`,
        }}
        rotate={-6}
        text={`Lovely countryside location`}
      />
    </>
  )
}
