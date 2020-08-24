import { Box } from 'components/box'
import { Location } from 'components/location'
import { Section } from 'components/section'
import { Svg } from 'components/svg'
import { Text } from 'components/text'
import { Polaroid } from 'components/polaroid'
import { Desktop, TabletMobile } from 'components/responsive'

import styles from './accommodation.css'

export const AccommodationVenue = props => {
  const {
    name,
    image,
  } = props

  return (
    <Section
      style={{
        backgroundColor: `rgb(255 249 233)`,
      }}
    >
      <Desktop>
        <Box
          flex={`grow`}
          gap={8}
        >
          <Polaroid
            image={image}
            rotate={-1}
            text={name}
          />
          <LocationContent {...props} />
        </Box>
      </Desktop>
      <TabletMobile>
        <Box marginBottom={10}>
          <Polaroid
            image={image}
            rotate={-1}
            text={name}
          />
        </Box>
        <LocationContent {...props} />
      </TabletMobile>
    </Section>
  )
}

const LocationContent = ({
  description,
  distanceFromChurch,
  distanceFromReception,
  telephone,
  location,
  name,
}) => {
  return (
    <div>
      <Text
        family={`secondary`}
        size={14}
        tag={`h1`}
      >
        {name}
      </Text>
      <Box
        direction={`horizontal`}
        gap={3}
        marginBottom={6}
      >
        <InfoItem
          icon={`church`}
          text={`${distanceFromChurch} from the church`}
        />
        <InfoItem
          icon={`barn`}
          text={`${distanceFromReception} from the reception`}
        />
      </Box>
      <Box
        alignItems={`center`}
        borders={{
          sides: [`bottom`],
          size: `1px`,
          color: `lightgrey`,
        }}
        direction={`horizontal`}
        gap={2}
        marginBottom={3}
        padding={{
          bottom: 4,
        }}
      >
        <Svg
          icon={`phone`}
          size={[`1.5em`]}
        />
        <Text
          fontWeight={700}
          lineHeight={1}
          size={6}
        >
          {telephone}
        </Text>
      </Box>
      <Box marginBottom={10}>
        <Text>
          {description}
        </Text>
      </Box>
      <Location location={location} />
    </div>
  )
}

const InfoItem = ({ icon, text }) => {
  return (
    <Box
      alignItems={`center`}
      className={styles.infoItem}
      flex={`inline`}
      gap={1}
    >
      <Svg
        icon={icon}
        size={[`1.5em`]}
      />
      <Text lineHeight={1}>
        {text}
      </Text>
    </Box>
  )
}