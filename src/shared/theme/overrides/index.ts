import { Theme } from '@mui/material'
import { merge } from 'lodash'
import Button from './Button'
import CardContent from './CardContent'
import IconButton from './IconButtons'
import InputLabel from './InputLabel'
import LinearProgress from './LinearProgress'
import OutlinedInput from './OutlinedInput'
import Tab from './Tab'
import Tabs from './Tabs'
import Typography from './Typography'

function setupComponentOverrides(theme: Theme) {
  return merge(
    Button(theme),
    IconButton(theme),
    CardContent(),
    InputLabel(theme),
    LinearProgress(),
    OutlinedInput(theme),
    Typography(),
    Tab(theme),
    Tabs(),
  )
}

export default setupComponentOverrides
