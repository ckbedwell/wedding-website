import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { useDimensions } from 'utils/useDimensions'
import { togglePullout } from 'store/pullout-slice'
import { HeaderNavigation } from 'components/navigation'
import { HeaderTitle } from 'components/header'
import {
  Desktop,
  TabletMobile,
} from 'components/responsive'

import styles from './header.css'
import navigation from 'data/navigation.json'

export const Header = () => {
  const open = useSelector(state => state.pullout.open)
  const dispatch = useDispatch()
  const navLength = navigation.length / 2
  const nav1 = navigation.slice(0, navLength)
  const nav2 = navigation.slice(navLength, navigation.length)
  const [ref, dimensions] = useDimensions()

  return (
    <>
      <div style={{ height: dimensions.height }} />
      <div
        className={classNames(styles.container, {
          [styles.pulloutOpen]: open,
        })}
        ref={ref}
      >
        <Desktop>
          <HeaderNavigation items={nav1} />
          <HeaderTitle />
          <HeaderNavigation items={nav2} />
        </Desktop>
        <TabletMobile>
          <button
            className={styles.menuButton}
            onClick={handleClick}
          >
            {`Menu`}
          </button>
          <HeaderTitle />
        </TabletMobile>
      </div>
    </>
  )

  function handleClick() {
    dispatch(togglePullout())
  }
}
