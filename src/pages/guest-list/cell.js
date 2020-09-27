import { Box } from 'components/box'

export const Cell = ({ children, ...props }) => {
  return (
    <Box
      padding={2}
      {...props}
    >
      {children}
    </Box>
  )
}