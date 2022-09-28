import "reflect-metadata";
import { DataSource } from "typeorm";
import { Products } from "./entity/Products";
import { Users } from "./entity/Users";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "demopos",
  synchronize: true,
  logging: false,
  entities: [Users, Products],
  migrations: [],
  subscribers: [],
});
