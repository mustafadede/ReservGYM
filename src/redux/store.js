import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from '../redux/exampleSlicer/exampleSlicer';

export default configureStore({
  reducer: {
    app: exampleReducer,
  },
});
