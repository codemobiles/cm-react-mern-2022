import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResult, RegisterResult } from "../../types/auth-result.type";
import { User } from "../../types/user.type";
import axios from "axios";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants";
import { RootState } from "../store";

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

export const login = createAsyncThunk("auth/login", async (value: User) => {
  let result = await httpClient.post(server.LOGIN_URL, value);

  const { token } = result.data;
  localStorage.setItem(server.TOKEN_KEY, token);
  return result.data;
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
  extraReducers: (builder) => {
    // register
    builder.addCase(register.fulfilled, (state) => {
      state.isError = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isError = true;
    });
    // login
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.result === "ok") {
        state.isAuthented = true;
        state.isError = false;
        state.loginResult = action.payload;
      } else {
        state.isError = true;
        state.isAuthented = false;
      }
      state.isAuthenticating = false;
    });
  },
});

export const { logout, relogin } = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;
