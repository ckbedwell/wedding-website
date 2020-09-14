import { Button } from 'components/button'

export const SubmitButton = ({ disabled, onClick }) => {
  return (
    <Button
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {`Submit`}
    </Button>
  )
}
