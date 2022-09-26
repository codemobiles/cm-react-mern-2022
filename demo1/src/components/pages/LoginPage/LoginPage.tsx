import { Button, Typography } from "@mui/material";
import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  return (
    <div>
      LoginPage1
      <Button
        sx={{ marginLeft: 10 }}
        variant="outlined"
        onClick={() => alert("1234")}
      >
        Ok
      </Button>
    </div>
  );
};

export default LoginPage;
