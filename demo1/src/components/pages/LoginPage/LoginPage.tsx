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
import { User } from "../../../types/user.type";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  let user: User = { username: "", password: "" };

  const showForm = () => {
    return (
      <form>
        <Stack direction="column" spacing={1}>
          <TextField
            onChange={(event) => (user.username = event.target.value)}
            label="Username"
            variant="outlined"
          />
          <TextField
            onChange={(event) => (user.password = event.target.value)}
            type="password"
            label="Password"
            variant="outlined"
          />
          <Button
            onClick={() => alert(JSON.stringify(user))}
            variant="contained"
          >
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
