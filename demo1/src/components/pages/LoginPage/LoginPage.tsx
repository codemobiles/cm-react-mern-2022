import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { User } from "../../../types/user.type";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Icons from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { exampleSelector } from "../../../store/slices/exampleSlice";

const formValidateSchema = Yup.object().shape({
  // username: Yup.string().email("Invalid email address").required("Email is required").trim(),
  username: Yup.string()
    .min(4)
    .required("Username must be more than 3 letters")
    .trim(),
  password: Yup.string().required("Password is required").trim(),
});

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const initialValue: User = { username: "", password: "" };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const exampleReducer = useSelector(exampleSelector);
  const navigate = useNavigate();

  const submit = (value: User) => {
    alert(JSON.stringify(value));
  };

  const showForm = () => {
    return (
      <form noValidate onSubmit={handleSubmit(submit)}>
        <Stack direction="column" spacing={1}>
          {/* Username */}
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                error={Boolean(errors.username?.message)}
                helperText={errors.username?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icons.Email />
                    </InputAdornment>
                  ),
                }}
              />
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
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icons.Password />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Button type="submit" variant="contained">
            Login
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/register")}
            variant="outlined"
          >
            Register
          </Button>
        </Stack>
      </form>
    );
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login {exampleReducer.count}
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
