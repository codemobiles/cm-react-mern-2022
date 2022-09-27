import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {

  let user: any = { username: "", password: "" };

  const showForm = () => {
    return (
      <form>
        <Stack direction="column" spacing={1}>
          <TextField
            onChange={(event) => (user.username = event.target.value)}
            label="Username"
            variant="outlined"
          />
          <TextField type="password" label="Password" variant="outlined" />
          <Button onClick={() => alert(user.username)} variant="contained">
            Login
          </Button>
          <Button variant="outlined">Register</Button>
        </Stack>
      </form>
    );
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
