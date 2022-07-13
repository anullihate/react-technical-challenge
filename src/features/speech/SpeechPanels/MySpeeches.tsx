/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Grid, Stack, Tab, Tabs, TextField, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

interface TabPanelProps {
  children: ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

function MySpeeches() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Tabs
          orientation='vertical'
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
          <Tab label='Item Four' {...a11yProps(3)} />
          <Tab label='Item Five' {...a11yProps(4)} />
          <Tab label='Item Six' {...a11yProps(5)} />
          <Tab label='Item Seven' {...a11yProps(6)} />
        </Tabs>
      </Grid>
      <Grid item xs={10}>
        <TabPanel value={value} index={0}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nam minus consectetur
          necessitatibus repellendus at optio asperiores ab quas rem, omnis ea reiciendis laboriosam
          quisquam porro voluptates veritatis quaerat voluptate.
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Grid>
      <Grid item xs>
        <Box display='flex' justifyContent='flex-end'>
          <Stack spacing={2} direction='row'>
            <TextField id='my-speech-author' label='Author' variant='outlined' required fullWidth />
            <TextField
              id='my-speech-keywords'
              label='Keywords'
              variant='outlined'
              required
              fullWidth
            />
            <TextField id='my-speech-date' label='Date' variant='outlined' required fullWidth />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display='flex' justifyContent='flex-end'>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' color='error' startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant='contained' color='primary'>
              Save
            </Button>
            <Button variant='contained' color='primary'>
              Share
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  )
}

export default MySpeeches
