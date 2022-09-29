import { Box } from "@mui/material";
import * as React from "react";

type StockPageProps = {
  //
};

const StockPage: React.FC<any> = () => {
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
