import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";

export interface StockState {
  stockAllResult: any[];
  stockOneResult: any | null;
}

const initialState: StockState = {
  stockAllResult: [],
  stockOneResult: null,
};

// Query
export const getProducts = createAsyncThunk(
  "stock/getAll",
  async (keyword?: string) => {
    if (keyword) {
      const result = await httpClient.get(
        `${server.PRODUCT_URL}/name/${keyword}`
      );
      return result.data;
    } else {
      const result = await httpClient.get(server.PRODUCT_URL);
      return result.data;
    }
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
});

export default stockSlice.reducer;
