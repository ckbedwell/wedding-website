import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { useDimensions } from 'utils/useDimensions'
import { togglePullout } from 'store/pullout-slice'
import { Box } from 'components/box'
import { Container } from 'components/container'
import { ConfettiToggle } from 'components/confetti-toggle'
import { HeaderNavigation } from 'components/navigation'
import { HeaderTitle } from 'components/header'
import { Svg } from 'components/svg'
import {
  Desktop,
  TabletMobile,
} from 'components/responsive'

import styles from './header.css'
import navigation from 'data/navigation.json'

export const Header = () => {
  const open = useSelector(state => state.pullout.open)
  const dispatch = useDispatch()
  const navLength = Math.ceil(navigation.length / 2)
  const nav1 = navigation.slice(0, navLength)
  const nav2 = navigation.slice(navLength, navigation.length)
  const [ref, dimensions] = useDimensions()

  return (
    <>
      <div style={{ height: dimensions.height }} />
      <Box
        center
        className={classNames(styles.container, {
          [styles.pulloutOpen]: open,
        })}
        ref={ref}
      >
        <Container
          container={`large`}
          padded
        >
          <Box
            center
            direction={`horizontal`}
            relative
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
                title={`menu`}
              >
                <Svg
                  icon={`menu`}
                  size={[`2em`]}
                />
              </button>
              <HeaderTitle />
            </TabletMobile>
            <div className={styles.confettiToggleWrapper}>
              <ConfettiToggle />
            </div>
          </Box>
        </Container>
      </Box>
    </>
  )

  function handleClick() {
    dispatch(togglePullout())
  }
}
