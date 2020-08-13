import React from 'react'
import { useDispatch } from 'react-redux'

import { useDimensions } from 'utils/useDimensions'
import { togglePullout } from 'store/pullout-slice'
import { HeaderNavigation } from 'components/navigation'
import { HeaderTitle } from 'components/header'
import {
  Responsive,
  Desktop,
  TABLET_KEY,
  MOBILE_KEY,
} from 'components/responsive'

import styles from './header.css'
import navigation from 'data/navigation.json'

export const Header = () => {
  const dispatch = useDispatch()
  const navLength = navigation.length / 2
  const nav1 = navigation.slice(0, navLength)
  const nav2 = navigation.slice(navLength, navigation.length)
  const [ref, dimensions] = useDimensions()

  return (
    <>
      <div style={{ height: dimensions.height }} />
      <div
        className={styles.container}
        ref={ref}
      >
        <Desktop deviceRange={[`desktop`, `tablet`]}>
          <HeaderNavigation items={nav1} />
          <HeaderTitle />
          <HeaderNavigation items={nav2} />
        </Desktop>
        <Responsive deviceRange={[TABLET_KEY, MOBILE_KEY]}>
          <button
            className={styles.menuButton}
            onClick={handleClick}
          >
            {`Menu`}
          </button>
          <HeaderTitle />
        </Responsive>
      </div>
    </>
  )

  function handleClick() {
    dispatch(togglePullout())
  }
}
