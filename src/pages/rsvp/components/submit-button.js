import { Button } from 'components/button'

export const SubmitButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      {`Submit`}
    </Button>
  )
}
