import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  privateKey:
    '4d4dbf9ca8db9cb74d14421056e0acdfee8ad0b3ac9eff46afa4f13e94ac2477',
  publicKey:
    '04ecf7de6ed06a3e92a419febc894158ee28bca5db46fedd17d368282bd84ce49a1c07a06eac1d41c9a5e11116d506613b95a836a3cea43539a68a45f59a069616',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPublicKey: (state, action) => {
      state.publicKey = action.payload;
    },
    setPrivateKey: (state, action) => {
      state.privateKey = action.payload;
    },
  },
});

export const { setPublicKey, setPrivateKey } = userSlice.actions;

export default userSlice.reducer;
