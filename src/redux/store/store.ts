// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { counterReducer } from '../slices/counterSlice';

// Create and configure the store

export function makeStore(){
 return configureStore({
    reducer: {
      counter: counterReducer,
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
