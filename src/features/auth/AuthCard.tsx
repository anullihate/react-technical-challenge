import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { Card } from '../../shared/components'

function AuthCard({ children }: { children: ReactNode }) {
  return (
    <Card
      sx={{
        maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        '& > *': {
          flexGrow: 1,
          flexBasis: '50%',
        },
      }}
      content={false}
      border={false}
      darkTitle={false}
      elevation={0}
      secondary={undefined}
      title=''
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </Card>
  )
}

export default AuthCard
