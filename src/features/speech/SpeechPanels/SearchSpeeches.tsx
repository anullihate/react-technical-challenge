import { SearchOutlined } from '@mui/icons-material'
import {
  FormControl,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  styled,
} from '@mui/material'
import { useState } from 'react'
import MOCK_DATA from '../../../shared/utils/MOCK_DATA.json'

function generate(search: string) {
  return MOCK_DATA.filter((data) => data.title.toLowerCase().includes(search.toLowerCase())).map(
    (data) => (
      <ListItemButton key={data.id}>
        <ListItemText primary={data.title} secondary={data.author} />
      </ListItemButton>
    ),
  )
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

function SearchSpeeches() {
  const [search, setSearch] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearch(value)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Demo>
          <List>
            <FormControl sx={{ width: { xs: '100%' } }}>
              <OutlinedInput
                size='small'
                id='header-search'
                fullWidth
                startAdornment={
                  <InputAdornment position='start' sx={{ mr: -0.5 }}>
                    <SearchOutlined />
                  </InputAdornment>
                }
                aria-describedby='header-search-text'
                inputProps={{
                  'aria-label': 'weight',
                }}
                placeholder='Search Speeches'
                value={search}
                onChange={handleChange}
              />
            </FormControl>
            {generate(search)}
          </List>
        </Demo>
      </Grid>
    </Grid>
  )
}

export default SearchSpeeches
