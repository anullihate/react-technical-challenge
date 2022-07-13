import { LinearProgress, styled } from '@mui/material'

const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}))

function Loader() {
  return (
    <LoaderWrapper>
      <LinearProgress color='primary' />
    </LoaderWrapper>
  )
}

export default Loader
