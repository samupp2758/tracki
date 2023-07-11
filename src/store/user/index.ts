import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    lastname: '',
    signedin: false,
  } as UserState,
  reducers: {
    changeUser: (state, { payload: { name, lastname,signedin } }: UserPayload) => {
      if (typeof name !== 'undefined') {
        state.name = name;
      }
      if (typeof lastname !== 'undefined') {
        state.lastname = lastname;
      }
      if (typeof signedin !== 'undefined') {
        state.signedin = signedin;
      }
    },
  },
});

export const { changeUser } = slice.actions;

export default slice.reducer;

export type UserState = {
  name: '';
  lastname: '';
  signedin: false;
};

type UserPayload = {
  payload: Partial<UserState>;
};
