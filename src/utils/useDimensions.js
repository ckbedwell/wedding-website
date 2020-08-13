import React from 'react'

export function useDimensions(deps = []) {
  const ref = React.useRef()
  const [dimensions, setDimensions] = React.useState({})

  // useCallback is needed
  const resizeListener = React.useCallback(() => {
    setDimensions(ref.current.getBoundingClientRect())
  }, [dimensions.width, dimensions.height])
  
  React.useEffect(() => {
    window.addEventListener('resize', resizeListener)

    return () => window.removeEventListener('resize', resizeListener)
  }, [resizeListener])

  React.useEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect())
    }
  }, [ref.current, ...deps])

  return [ref, dimensions]
}
