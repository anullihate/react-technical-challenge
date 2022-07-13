import { createSlice } from '@reduxjs/toolkit'

export interface SpeechState {}

const initialState: SpeechState = {}

export const speechSlice = createSlice({
  name: 'speech',
  initialState,
  reducers: {},
})

export default speechSlice.reducer
