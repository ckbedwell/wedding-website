import { Box } from 'components/box'
import { Svg } from 'components/svg'
import { Select } from 'components/select'
import { Text } from 'components/text'

import styles from './guest-form.css'

const canComeOptions = [
  {
    name: `select`,
  },
  {
    name: `Yes`,
    value: `Yes`,
  },
  {
    name: `No`,
    value: `No`,
  },
]

const foodRequirementsOptions = [
  {
    name: `None`,
    value: `none`,
  },
  {
    name: `Vegetarian`,
    value: `vegetarian`,
  },
  {
    name: `Vegan`,
    value: `vegan`,
  },
  {
    name: `Allergies`,
    value: `allergies`,
  },
]

export const GuestForm = ({
  idx,
  guestData,
  onChange,
  single,
}) => {
  const {
    canCome,
    foodRequirements,
    name,
  } = guestData

  return (
    <Box
      className={styles.guestForm}
      padding={3}
    >
      <Box
        className={styles.guestFormInner}
        padding={50}
        relative
      >
        <Box
          borders={[{
            sides: [`bottom`],
            size: `1px`,
            color: `lightgrey`,
          }]}
          marginBottom={6}
        >
          <Text
            family={`secondary`}
            size={10}
          >
            {name}
          </Text>
        </Box>
        <Box marginBottom={6}>
          <Select
            label={`Can ${getGuestReference(single, name)} come?`}
            onChange={value => handleChange(`canCome`, value)}
            options={canComeOptions}
            value={canCome}
          />
        </Box>
        <Box marginBottom={6}>
          <Select
            label={`Any food requirements?`}
            onChange={value => handleChange(`foodRequirements`, value)}
            options={foodRequirementsOptions}
            value={foodRequirements}
          />
        </Box>
        <div>
          {foodRequirements === `allergies` &&
          <textarea
            type={`text`}
          />
          }
        </div>
        <Box
          borders={{
            color: `lightgrey`,
            sides: [`right`, `top`],
            size: `2px`,
          }}
          className={styles.decorationTop}
        />
        <Box
          borders={{
            color: `lightgrey`,
            sides: [`left`, `bottom`],
            size: `2px`,
          }}
          className={styles.decorationBottom}
        />
      </Box>
    </Box>
  )

  function handleChange(fieldName, content) {
    onChange({
      idx,
      fieldName,
      content,
    })
  }
}

function getGuestReference(single, name) {
  if (single) {
    return `you`
  }

  return name
}