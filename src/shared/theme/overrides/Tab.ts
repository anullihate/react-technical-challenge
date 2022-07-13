import { Theme } from '@mui/material'

function Tab(theme: Theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 46,
          color: theme.palette.text.primary,
        },
      },
    },
  }
}

export default Tab
