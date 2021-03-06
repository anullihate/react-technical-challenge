import * as Yup from 'yup'
import { Formik } from 'formik'
import { MouseEvent, useState } from 'react'
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from '@mui/material'

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          setStatus({ success: false })
          setSubmitting(false)
        } catch (err: { message: string } | any) {
          setStatus({ success: false })
          setErrors({ submit: err.message })
          setSubmitting(false)
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor='email-login'>Email Address</InputLabel>
                <OutlinedInput
                  id='email-login'
                  type='email'
                  value={values.email}
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Enter email address'
                  fullWidth
                  autoFocus
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <FormHelperText error id='standard-weight-helper-text-email-login'>
                    {errors.email}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor='password-login'>Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id='-password-login'
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                        size='large'
                      >
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder='Enter password'
                />
                {touched.password && errors.password && (
                  <FormHelperText error id='standard-weight-helper-text-password-login'>
                    {errors.password}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                color='primary'
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  )
}

export default LoginForm
