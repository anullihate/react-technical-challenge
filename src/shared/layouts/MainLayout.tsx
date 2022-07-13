import { Box, Toolbar } from '@mui/material'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, HeaderContext, HeaderProvider } from './Header'

function MasterLayout() {
  const [value, setValue] = useState(0)
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <HeaderProvider value={{ headerTabsValue: value, setHeaderTabsValue: setValue }}>
        <HeaderContext.Consumer>
          {({ headerTabsValue, setHeaderTabsValue }) => (
            <Header headerTabsValue={headerTabsValue} setHeaderTabsValue={setHeaderTabsValue} />
          )}
        </HeaderContext.Consumer>
        <Box component='main' sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Toolbar />
          <Outlet />
        </Box>
      </HeaderProvider>
    </Box>
  )
}

export default MasterLayout
