// src/store/slices/counterSlice.ts
import StorageService from '@/shared/storage.service';
import { createSlice } from '@reduxjs/toolkit';

export interface LocalAuthSlice {
  isLoggedIn: boolean;
}

const initialState: LocalAuthSlice = {
    isLoggedIn : StorageService.isLoggedInUser(),
};

export const localAuthSlice = createSlice({
  name: 'localAuth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = localAuthSlice.actions;
export const localAuthReducer = localAuthSlice.reducer;
