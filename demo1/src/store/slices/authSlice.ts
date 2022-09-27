import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user.type";

export const login = createAsyncThunk("auth/login", (user: User) => {
  alert(JSON.stringify(user));
});

export const register = createAsyncThunk("auth/register", (user: User) => {
  alert(JSON.stringify(user));
});

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
