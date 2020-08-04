import React from 'react'
import { useDispatch } from 'react-redux'

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

  return (
    <div className={styles.container}>
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
  )

  function handleClick() {
    dispatch(togglePullout())
  }
}
