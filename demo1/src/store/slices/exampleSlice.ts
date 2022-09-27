import { createSlice } from "@reduxjs/toolkit";

type StateProps = {
  count: number;
};
const defaultState: StateProps = { count: 0 };

const exampleSlice = createSlice({
  name: "example",
  initialState: defaultState,
  reducers: {}, // used to update state in synchronous
  extraReducers: (builder) => {}, // usd to update state in asynchronous
});

export default exampleSlice.reducer;
