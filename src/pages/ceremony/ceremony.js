import { Box } from 'components/box'
import { Section } from 'components/section'
import { Desktop, TabletMobile } from 'components/responsive'

import { ChurchPolaroid } from './content/church-polaroid'
import { ChurchText } from './content/church-text'
import { ParentsArrow } from './content/parents-arrow'
import { ParentsPolaroids } from './content/parents-polaroids'

import styles from './ceremony.css'

export const Ceremony = () => {
  return (
    <>
      <Desktop>
        <Section
          style={{
            backgroundColor: `rgb(255 245 239)`,
          }}
        >
          <Box
            flex={`grow`}
            gap={10}
          >
            <ChurchPolaroid width={800} />
            <ChurchText />
          </Box>
        </Section>
        <Section>
          <Box
            flex={`grow`}
            relative
          >
            <ParentsPolaroids />
            <div className={styles.desktopArrow}>
              <ParentsArrow />
            </div>
          </Box>
        </Section>
      </Desktop>

      <TabletMobile>
        <Section
          style={{
            backgroundColor: `rgb(255 245 239)`,
          }}
        >
          <Box marginBottom={6}>
            <ChurchPolaroid width={`100%`} />
          </Box>
          <ChurchText />
        </Section>
        <Section>
          <ParentsArrow />
          <ParentsPolaroids />
        </Section>
      </TabletMobile>
    </>
  )
}
