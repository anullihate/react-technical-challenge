import { TextField, Grid, Button } from '@mui/material'
import { useState } from 'react'

function NewSpeech() {
  const [speech, setSpeech] = useState({
    author: '',
    title: '',
    content: '',
    date: new Date().toISOString(),
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setSpeech({ ...speech, [name]: value })
  }

  const handleClick = async () => {}
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id='speech-author'
            label='Author'
            variant='outlined'
            required
            fullWidth
            value={speech.author}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='speech-title'
            label='Title'
            variant='outlined'
            required
            fullWidth
            value={speech.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='speech-author-content'
            label='Speech Content'
            multiline
            rows={4}
            fullWidth
            value={speech.content}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent='flex-end' marginTop={2}>
        <Button variant='contained' color='primary' onClick={() => handleClick()}>
          Save
        </Button>
      </Grid>
    </>
  )
}

export default NewSpeech
