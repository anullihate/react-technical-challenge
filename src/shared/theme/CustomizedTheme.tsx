import {
  ThemeOptions,
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material'
import { useMemo } from 'react'
import palette from './options/palette'
import shadows from './options/shadows'
import typography from './options/typography'
import setupComponentOverrides from './overrides'

function CustomizedTheme({ children }: { children: React.ReactNode }) {
  const paletteThemeOptions = palette('light')
  const typographyThemeOptions = typography('Roboto')
  const customShadowsThemeOptions = useMemo(
    () => shadows(paletteThemeOptions),
    [paletteThemeOptions],
  )

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: paletteThemeOptions.palette,
      customShadows: customShadowsThemeOptions,
      typography: typographyThemeOptions,
    }),
    [paletteThemeOptions, typographyThemeOptions, customShadowsThemeOptions],
  )

  const themes = createTheme(themeOptions)
  themes.components = setupComponentOverrides(themes)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default CustomizedTheme
