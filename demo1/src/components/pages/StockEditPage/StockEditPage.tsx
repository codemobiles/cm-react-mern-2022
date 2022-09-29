import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { getProducts, stockSelector } from "../../../store/slices/stockSlice";
import { useAppDispatch } from "../../../store/store";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 150,
  },
];

const rows = [
  { id: 1, name: "Angular", price: 10 },
  { id: 2, name: "Vue", price: 12 },
  { id: 3, name: "React", price: 30 },
];

export default function DataGridDemo() {
  const stockReducer = useSelector(stockSelector);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
