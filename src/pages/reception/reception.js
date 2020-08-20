import { Box } from 'components/box'
import { Section } from 'components/section'
import { Desktop, TabletMobile } from 'components/responsive'

import { ReceptionText } from './content/reception-text'
import { ReceptionPolaroid } from './content/reception-polaroid'
import { BarnPolaroids } from './content/barn-polaroids'

// import styles from './reception.css'

export const Reception = () => {
  return (
    <>
      <Desktop>
        <Section
          style={{
            backgroundColor: `rgb(255 246 234)`,
          }}
        >
          <Box
            flex={`grow`}
            gap={6}
          >
            <ReceptionText />
            <ReceptionPolaroid width={800} />
          </Box>
        </Section>
        <Section>
          <Box
            flex={`grow`}
            relative
          >
            <BarnPolaroids />
          </Box>
        </Section>
      </Desktop>
      <TabletMobile>
        <Section
          style={{
            backgroundColor: `rgb(255 246 234)`,
          }}
        >
          <Box marginBottom={6}>
            <ReceptionPolaroid width={`100%`} />
          </Box>
          <ReceptionText />
        </Section>
        <Section>
          <BarnPolaroids />
        </Section>
      </TabletMobile>
    </>
  )
}
