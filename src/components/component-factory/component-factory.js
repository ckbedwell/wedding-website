import React from 'react'
import { useSelector } from 'react-redux'

import styles from './component-factory.css'

export const ComponentFactory = ({ items }) => {
  const components = useSelector(state => state.components)

  return (
    <div className={styles.container}>
      {items.map(({
        key,
        component,
        ...props
      }) => {
        const Component = components[component]

        return (
          <Component
            key={key}
            {...props}
          />
        )
      })}
    </div>
  )
}
