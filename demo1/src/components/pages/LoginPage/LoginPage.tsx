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
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login
          </Typography>

          <form>
            <Stack direction="column" spacing={1}>
              <TextField label="Username" variant="outlined" />
              <TextField type="password" label="Password" variant="outlined" />
              <Button variant="contained">Login</Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
