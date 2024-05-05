import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  publicKey: '',
  address: '',
  balance: 0,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setPublicKey: (state, action) => {
      state.publicKey = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { setPublicKey, setAddress, setBalance } = walletSlice.actions;

export default walletSlice.reducer;
