import { createSlice } from '@reduxjs/toolkit';
import apiDeleteService from '../services/apiDeleteService';
import apiGetService from '../services/apiGetService';

export const backNoveltiesSlice = createSlice({
  name: 'novelties',
  initialState: {
    novelties: []
  },
  reducers: {
    storeNovelties: (state, action) => {
      state.novelties = action.payload
    },
    deleteNovelty: (state, action) => {
      state.novelties = state.novelties.filter(n => action.payload !== n.id)
    },
    updateNovelty: (state, action) => {
      state.novelties = state.novelties.map(n => n.id === action.payload.id ? action.payload : n)
    }
  },
});

export const { storeNovelties, deleteNovelty, updateNovelty } = backNoveltiesSlice.actions;

export const loadNovelties = () => async dispatch => {
  const novelties = await apiGetService('news')
  dispatch(storeNovelties(novelties))
};

export const deleteNovelties = (id) => async dispatch => {
  await apiDeleteService('news', id)
  dispatch(deleteNovelty(id))
}

export const updateNovelties = (updatedNovelty) => async dispatch => {
  dispatch(updateNovelty(updatedNovelty))
}

export const noveltiesSelector = state => state.novelties.novelties;
  
export default backNoveltiesSlice.reducer;