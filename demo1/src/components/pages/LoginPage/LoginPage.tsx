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
import { Controller, useForm } from "react-hook-form";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const initialValue: User = { username: "", password: "" };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ defaultValues: initialValue });

  const submit = (value: User) => {
    alert(JSON.stringify(value));
  };

  const showForm = () => {
    return (
      <form onSubmit={handleSubmit(submit)}>
        <Stack direction="column" spacing={1}>
          {/* Username */}
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Username" variant="outlined" />
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
              />
            )}
          />

          <Button type="submit" variant="contained">
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
