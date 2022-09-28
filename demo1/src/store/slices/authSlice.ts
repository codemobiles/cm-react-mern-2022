import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResult, RegisterResult } from "../../types/auth-result.type";
import { User } from "../../types/user.type";
import axios from "axios";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants";

export interface AuthState {
  loginResult?: LoginResult;
  registerResult?: RegisterResult;
  isAuthenticating: boolean;
  isAuthented: boolean;
  isError: boolean;
}

const defaultState: AuthState = {
  isAuthented: false,
  isAuthenticating: true,
  isError: false,
};

export const login = createAsyncThunk("auth/login", (user: User) => {
  alert(JSON.stringify(user));
});

export const register = createAsyncThunk(
  "auth/register",
  async (user: User) => {
    const result = await httpClient.post(server.REGISTER_URL, user);
    alert(JSON.stringify(result.data));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    logout: (state) => {},
    relogin: (state) => {},
  },
  extraReducers: (builder) => {},
});

export const { logout, relogin } = authSlice.actions;
export default authSlice.reducer;
