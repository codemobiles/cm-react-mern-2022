import { Box } from "@mui/material";
import * as React from "react";
import { getProducts } from "../../../store/slices/stockSlice";
import { useAppDispatch } from "../../../store/store";

type StockPageProps = {
  //
};

const StockPage: React.FC<any> = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // listen created event
    console.log("Stock created");
    dispatch(getProducts());
  });

  const courses: string[] = ["angular", "react", "vue", "flutter"];

  return (
    <Box>
      StockPage
      <ul>
        {courses.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Box>
  );
};

export default StockPage;
