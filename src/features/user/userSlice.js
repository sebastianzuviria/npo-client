import { createSlice } from '@reduxjs/toolkit';

const loginService = {
  login: (credentials) => {
    return credentials
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    storeUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: (state, action) => {
      state.user = null
    },
  },
});

export const { storeUser, removeUser } = userSlice.actions;

export const userLogin = credentials => async dispatch => {
    const user = await loginService.login(credentials);
    window.localStorage.setItem(
      'ongLoggedUser', JSON.stringify(user)
    );
    dispatch(storeUser(user));
};

export const userLogout = () => dispatch => {
    dispatch(removeUser());
    window.localStorage.removeItem('ongLoggedUser');
};
  
export const userLogged = state => state.user.user;
  
export default userSlice.reducer;