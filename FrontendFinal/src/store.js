import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authslice'
import postIdSlice from './features/postIdSlice'
// create a new store
export const store = configureStore({
  reducer: {
    auth: authSlice,
    //postIds : postIdSlice,
  },
})