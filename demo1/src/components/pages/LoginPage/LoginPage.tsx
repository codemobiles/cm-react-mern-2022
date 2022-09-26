import { Button } from "@mui/material";
import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  return (
    <div>
      LoginPage1
      <Button variant="outlined" onClick={() => alert("1234")}>
        Ok{" "}
      </Button>
    </div>
  );
};

export default LoginPage;
