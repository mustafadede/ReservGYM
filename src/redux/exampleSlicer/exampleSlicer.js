import {createSlice} from '@reduxjs/toolkit';

export const exampleSlicer = createSlice({
  name: 'app',
  initialState: {
    appName: 'ReservGYM',
  },
  reducers: {
    changeName: state => {
      state.appName = Math.random(0, 10) + 'Muhteşem İsim';
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeName} = exampleSlicer.actions;

export default exampleSlicer.reducer;
