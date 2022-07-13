import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { authReducer } from '../features/auth'
import { speechReducer } from '../features/speech'

export const store = configureStore({
  reducer: {
    speech: speechReducer,
    auth: authReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
