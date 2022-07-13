import { Box, Grid, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import AuthCard from './AuthCard'

function AuthWrapper({ children }: { children: ReactNode }) {
  const theme = useTheme()
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.primary.light }}>
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        sx={{
          minHeight: '100vh',
        }}
      >
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
export default AuthWrapper
