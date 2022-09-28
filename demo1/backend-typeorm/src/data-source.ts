import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Users],
  migrations: [],
  subscribers: [],
});
