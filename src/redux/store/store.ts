// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { counterReducer } from '../slices/counterSlice';
import { localAuthReducer } from '../slices/localAuthSlice';

// Create and configure the store

export function makeStore(){
 return configureStore({
    reducer: {
      counter: counterReducer,
      localAuth: localAuthReducer,
    },
  });
}
export const store = makeStore();

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
