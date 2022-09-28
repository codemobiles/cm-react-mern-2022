import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "demopos",
  synchronize: true,
  logging: false,
  entities: [Users],
  migrations: [],
  subscribers: [],
});
