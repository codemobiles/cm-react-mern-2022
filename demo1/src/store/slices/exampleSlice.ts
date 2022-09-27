import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {},
  reducers: {}, // used to update state in synchronous
  extraReducers: (builder) => {}, // usd to update state in asynchronous
});

export default exampleSlice.reducer;
