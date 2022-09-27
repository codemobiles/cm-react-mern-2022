import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateProps = {
  count: number;
};
const defaultState: StateProps = { count: 10 };

const exampleSlice = createSlice({
  name: "example",
  initialState: defaultState,
  reducers: {
    add: (state, action: PayloadAction<void>) => {
      state.count = state.count + 1;
    },
  }, // used to update state in synchronous
  extraReducers: (builder) => {}, // usd to update state in asynchronous
});

export const { add } = exampleSlice.actions;
export const exampleSelector = (state: RootState) => state.exampleReducer;
export default exampleSlice.reducer;
