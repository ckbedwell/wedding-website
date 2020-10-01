import classNames from 'classnames'

import { Box } from 'components/box'
import { DecorativeBox } from 'components/decorative-box'
import { Select } from 'components/select'
import { Text } from 'components/text'
import { Textarea } from 'components/textarea'

import styles from './guest-form.css'

export const canComeOptions = [
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
    allergies,
    canCome,
    foodRequirements,
    name,
  } = guestData

  return (
    <DecorativeBox>
      <div className={styles.fieldsWrapper}>
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
        <div
          className={classNames(styles.optional, {
            [styles.appear]: foodRequirements === `allergies`,
          })}
        >
          <Textarea
            label={`What allergies do you have?`}
            onChange={value => handleChange(`allergies`, value)}
            value={allergies}
          />
        </div>
      </div>
    </DecorativeBox>
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