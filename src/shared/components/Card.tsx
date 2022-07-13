/* eslint-disable react/jsx-props-no-spreading */
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from '@mui/material'
import { forwardRef, ReactNode } from 'react'

const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' },
}
type CardPropsType = {
  border?: boolean
  contentSX?: object
  darkTitle?: boolean
  divider?: boolean
  elevation?: number
  secondary?: ReactNode
  sx?: object
  title: string
  content?: boolean
  children: ReactNode
}

const cardDefaultProps = {
  border: true,
  content: true,
  contentSX: {},
  darkTitle: false,
  divider: true,
  elevation: 0,
  secondary: undefined,
  sx: {},
}

const Card = forwardRef<HTMLDivElement, CardPropsType>(
  (
    {
      border,
      children,
      content,
      contentSX,
      darkTitle,
      divider,
      elevation,
      secondary,
      sx,
      title,
      ...others
    },
    ref,
  ) => {
    const theme = useTheme()

    return (
      <MuiCard
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          ...sx,
          border: border ? '1px solid' : 'none',
          borderRadius: 2,
          borderColor:
            theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey[800],
          boxShadow: 'inherit',
          ':hover': {
            boxShadow: 'inherit',
          },
          '& pre': {
            m: 0,
            p: '16px !important',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem',
          },
        }}
      >
        {!darkTitle && title && (
          <CardHeader
            sx={headerSX}
            titleTypographyProps={{ variant: 'subtitle1' }}
            title={title}
            action={secondary}
          />
        )}
        {darkTitle && title && (
          <CardHeader
            sx={headerSX}
            title={<Typography variant='h3'>{title}</Typography>}
            action={secondary}
          />
        )}

        {title && divider && <Divider />}

        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}
      </MuiCard>
    )
  },
)

Card.defaultProps = cardDefaultProps

export default Card
