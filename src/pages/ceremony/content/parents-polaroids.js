import { Polaroid } from 'components/polaroid'

export const ParentsPolaroids = () => {
  return (
    <>
      <Polaroid
        image={{
          ratio: [1200, 1600],
          src: `paul-and-mandi-4.jpg`,
        }}
        rotate={-3}
      />
      <Polaroid
        image={{
          ratio: [1200, 1600],
          src: `paul-and-mandi-3.jpg`,
        }}
        rotate={1}
      />
    </>
  )
}
