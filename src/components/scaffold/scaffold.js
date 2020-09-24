import React from 'react'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import queryString from 'query-string'

import { setUp } from 'store/database-slice'

import styles from './scaffold.css'

export const Scaffold = ({ children }) => {
  const { search } = useLocation()
  const open = useSelector(state => state.pullout.open)
  const dispatch = useDispatch()
  const { id } = queryString.parse(search)

  React.useEffect(() => {
    dispatch(setUp(id))
  }, [])

  return (
    <div
      className={classNames(styles.container, {
        [styles.pulloutOpen]: open,
      })}
    >
      {children}
    </div>
  )
}
