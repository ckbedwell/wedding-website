import { Box } from 'components/box'
import { Section } from 'components/section'
import { Desktop, TabletMobile } from 'components/responsive'

import { EngagementPolaroid } from './content/engagement-polaroid'
import { AboutText } from './content/about-text'

import styles from './about.css'

export const About = () => {
  return (
    <>
      <Desktop>
        <Section
          style={{
            backgroundColor: `rgb(255 245 239)`,
          }}
        >
          <Box
            direction={`horizontal`}
            gap={10}
          >
            <EngagementPolaroid width={550} />
            <AboutText />
          </Box>
        </Section>
      </Desktop>

      <TabletMobile>
        <Section
          style={{
            backgroundColor: `rgb(255 245 239)`,
          }}
        >
          <Box
            direction={`vertical`}
            gap={8}
          >
            <EngagementPolaroid />
            <AboutText />
          </Box>
        </Section>
      </TabletMobile>
    </>
  )
}
