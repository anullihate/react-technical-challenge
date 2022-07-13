/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
}

const initialState: AuthState = {
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false
    },
  },
})

export default authSlice.reducer
