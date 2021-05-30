import { createSlice } from '@reduxjs/toolkit';

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

export const isLogged = () => dispatch => {
  const loggedUserJSON = window.localStorage.getItem('ongLoggedUser');
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(storeUser(user));
  };
};

export const userLogin = authResponse => async dispatch => {
    const user = authResponse;
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