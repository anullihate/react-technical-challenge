import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface HeaderPanelProps {
  children: ReactNode
  index: number
  value: number
}

function HeaderPanel({ children, index, value }: HeaderPanelProps) {
  return (
    <Box
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`header-tabpanel-${index}`}
      aria-labelledby={`header-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  )
}

export default HeaderPanel
