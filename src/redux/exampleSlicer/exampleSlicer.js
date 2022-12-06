import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/").then((data) => data.json());
  return res;
});

export const exampleSlicer = createSlice({
  name: "app",
  initialState: {
    appName: "ReservGYM",
    entities: [],
    loading: false,
  },
  reducers: {
    changeName: (state, action) => {
      state.entities.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.push(action.payload);
    });
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { changeName } = exampleSlicer.actions;

export default exampleSlicer.reducer;
