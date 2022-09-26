import * as React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import LoginPage from "./components/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import { blue } from "@mui/material/colors";

const drawerWidth = 240;

// https://mui.com/customization/default-theme/
const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background_menu.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f2fcff",
          backgroundPosition: "bottom",
          width: drawerWidth,
        },
      },
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  palette: {
    primary:
      process.env.REACT_APP_IS_PRODUCTION === "1" ? { main: "#C1272D" } : blue,
    background: {
      default: "#EEE",
    },
  },
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <Menu open={open} handleDrawerClose={handleDrawerClose} />
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
