import { uiReducer } from './uiSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({reducer : { uiState : uiReducer }})