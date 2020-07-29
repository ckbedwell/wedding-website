import React from 'react'

import { Container } from 'components/container'

export const ComponentLayout = ({ children, layout }) => {
  if (!layout) {
    return children
  }

  const {
    container,
    ...boxModel
  } = layout

  return (
    <Container
      container={container}
      style={getStyles(boxModel)}
    >
      {children}
    </Container>
  )
}

function getStyles({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}) {
  return {
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
  }
}
