import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  privateKey: '',
  publicKey: '',
  address: '',
  balance: 0,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setPrivateKey: (state, action) => {
      state.privateKey = action.payload;
    },
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

export const { setPrivateKey, setPublicKey, setAddress, setBalance } =
  walletSlice.actions;

export default walletSlice.reducer;
