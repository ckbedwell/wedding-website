import React from 'react'

import styles from './guest-form.css'
import { Select } from '../../../components/select'

const canComeOptions = [
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
}) => {
  const {
    canCome,
    foodRequirements,
    name,
  } = guestData

  return (
    <div className={styles.container}>
      <label>
        {`Can ${name} come?`}
      </label>
      <Select
        onChange={value => handleChange(`canCome`, value)}
        options={canComeOptions}
        value={canCome}
      />

      <label>
        {`Any food requirements?`}
      </label>
      <Select
        onChange={value => handleChange(`foodRequirements`, value)}
        options={foodRequirementsOptions}
        value={foodRequirements}
      />
      {foodRequirements === `allergies` &&
        <textarea
          type="text"
        />
      }
    </div>
  )

  function handleChange(fieldName, content) {
    onChange({
      idx,
      fieldName,
      content,
    })
  }
}
