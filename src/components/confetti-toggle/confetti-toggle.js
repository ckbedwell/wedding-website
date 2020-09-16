import { useSelector, useDispatch } from 'react-redux'
import { toggleConfetti } from 'store/user-slice'
import { Switch } from 'components/switch'

export const ConfettiToggle = () => {
  const dispatch = useDispatch()
  const confetti = useSelector(state => state.user.confetti)

  return (
    <Switch
      checked={confetti}
      onClick={handleClick}
      type={`round`}
    />
  )

  function handleClick() {
    dispatch(toggleConfetti())
  }
}
