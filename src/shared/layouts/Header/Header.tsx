/* eslint-disable react/jsx-props-no-spreading */
import { AppBar, Toolbar, useTheme } from '@mui/material'
import HeaderContent from './HeaderContent'

export interface HeaderProps {
  headerTabsValue: number
  setHeaderTabsValue: React.Dispatch<React.SetStateAction<number>>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header({ headerTabsValue, setHeaderTabsValue }: HeaderProps) {
  const theme = useTheme()

  const mainHeader = (
    <Toolbar>
      <HeaderContent />
    </Toolbar>
  )

  return (
    <AppBar
      position='fixed'
      color='inherit'
      elevation={0}
      sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
    >
      {mainHeader}
    </AppBar>
  )
}

export default Header
