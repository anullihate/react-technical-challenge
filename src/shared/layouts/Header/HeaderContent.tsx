/* eslint-disable react/jsx-props-no-spreading */
import { Box, Tab, Tabs } from '@mui/material'
import { SyntheticEvent, useContext } from 'react'
import { HeaderContext } from '../../contexts/HeaderProvider'

function HeaderContent() {
  const headerContext = useContext(HeaderContext)
  const { headerTabsValue, setHeaderTabsValue } = headerContext

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setHeaderTabsValue(newValue)
  }

  const a11yProps = (index: number) => ({
    id: `header-tab-${index}`,
    'aria-controls': `header-tabpanel-${index}`,
  })

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <Tabs value={headerTabsValue} onChange={handleChange} textColor='inherit'>
        <Tab label='View my Speeches' {...a11yProps(0)} />
        <Tab label='Submit a new Speech' {...a11yProps(1)} />
        <Tab label='Search all Speeches' {...a11yProps(2)} />
      </Tabs>
    </Box>
  )
}

export default HeaderContent
