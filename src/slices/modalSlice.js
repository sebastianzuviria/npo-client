import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'showModal',
  initialState: {
    showModal: ''
  },
  reducers: {
    handleModal: (state, action) => {
      state.showModal = action.payload;
    }
  }
});

export const { handleModal } = modalSlice.actions;

export const changeModalState = (modalName) => (dispatch) => {
  dispatch(handleModal(modalName));
};

export default modalSlice.reducer;
