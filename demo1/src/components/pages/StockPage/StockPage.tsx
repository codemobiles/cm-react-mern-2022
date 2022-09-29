import { Box } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { getProducts, stockSelector } from "../../../store/slices/stockSlice";
import { useAppDispatch } from "../../../store/store";

type StockPageProps = {
  //
};

const StockPage: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const stockReducer = useSelector(stockSelector);

  React.useEffect(() => {
    // listen created event
    console.log("Stock created");
    dispatch(getProducts());
  });

  return (
    <Box>
      StockPage
      <ul>
        {stockReducer.stockAllResult.map((item) => (
          <li key={item.product_id}>{item.name}</li>
        ))}
      </ul>
    </Box>
  );
};

export default StockPage;
