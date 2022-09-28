import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "post",
    route: "/register",
    controller: UserController,
    action: "register",
  },
];