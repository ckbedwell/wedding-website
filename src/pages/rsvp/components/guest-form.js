import { Box } from 'components/box'
import { Select } from 'components/select'

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
      backgroundColor={`rgb(244 244 244)`}
      padding={5}
    >
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