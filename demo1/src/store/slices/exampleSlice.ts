import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateProps = {
  count: number;
};
const defaultState: StateProps = { count: 10 };

const exampleSlice = createSlice({
  name: "example",
  initialState: defaultState,
  reducers: {}, // used to update state in synchronous
  extraReducers: (builder) => {}, // usd to update state in asynchronous
});

export const exampleSelector = (state: RootState) => state.exampleReducer;
export default exampleSlice.reducer;
