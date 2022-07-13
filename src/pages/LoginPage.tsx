import { Grid, Typography } from '@mui/material'
import AuthWrapper from '../features/auth/AuthWrapper'
import LoginForm from '../features/auth/Forms/LoginForm'

function LoginPage() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3'>Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  )
}

export default LoginPage
