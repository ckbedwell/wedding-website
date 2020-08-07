import React from 'react'

export const Select = ({
  options,
  onChange,
  value,
}) => {
  return (
    <select
      onChange={e => onChange(e.target.value)}
      value={value}
    >
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  )
}
