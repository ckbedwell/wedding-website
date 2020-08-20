export const Select = ({
  label,
  options,
  onChange,
  value,
}) => {
  return (
    <div>
      <div>
        <label>
          {label}
        </label>
      </div>
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
    </div>
  )
}
