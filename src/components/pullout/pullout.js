import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useSwipeable } from 'react-swipeable'

import { closePullout } from 'store/pullout-slice'
import { PulloutNavigation } from 'components/navigation'

import styles from './pullout.css'

export const Pullout = () => {
  const dispatch = useDispatch()
  const handlers = useSwipeable({
    onSwiped: handleSwipe,
    trackMouse: true,
  })
  const open = useSelector(state => state.pullout.open)
  const pulloutComponents = {
    menu: PulloutNavigation,
  }

  const Component = pulloutComponents.menu

  return (
    <div
      className={classNames(styles.container, {
        [styles.pulloutOpen]: open,
      })}
      {...handlers}
    >
      {open && <Component />}
    </div>
  )

  function handleSwipe(swipeData) {
    if (swipeData.dir === `Left`) {
      dispatch(closePullout())
    }
  }
}
