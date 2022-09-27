import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
