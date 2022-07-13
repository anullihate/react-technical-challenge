import { presetPalettes } from '@ant-design/colors'
import { createTheme, PaletteMode } from '@mui/material'
import preset from '../preset'

function palette(mode: PaletteMode) {
  const colors = presetPalettes

  const greyPrimary = [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#262626',
    '#141414',
    '#000000',
  ]
  const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f']
  const greyConstant = ['#fafafb', '#e6ebf1']

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant]

  const presetColorPalette = preset.getThemeColorPalette(colors)

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff',
      },
      ...presetColorPalette,
      text: {
        primary: presetColorPalette.grey[700],
        secondary: presetColorPalette.grey[500],
        disabled: presetColorPalette.grey[400],
      },
      action: {
        disabled: presetColorPalette.grey[300],
      },
      divider: presetColorPalette.grey[200],
      background: {
        paper: presetColorPalette.grey[0],
        default: presetColorPalette.grey.A50,
      },
    },
  })
}

export default palette
