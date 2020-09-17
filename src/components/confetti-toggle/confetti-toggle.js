import { useSelector, useDispatch } from 'react-redux'
import { toggleConfetti } from 'store/user-slice'
import { Switch } from 'components/switch'

export const ConfettiToggle = () => {
  const dispatch = useDispatch()
  const confetti = useSelector(state => state.user.confetti)

  return (
    <Switch
      checked={confetti}
      onChange={handleChange}
      title={`Turn confetti ${confetti ? `off` : `on`}`}
      type={`round`}
    />
  )

  function handleChange() {
    dispatch(toggleConfetti())
  }
}
