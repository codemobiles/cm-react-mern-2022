import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";

export class UserController {
  // private userRepository = getRepository(User)
  private userRepository = AppDataSource.getMongoRepository(Users);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async register(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.insertOne({
      username: "admin",
      password: "1234",
    });
  }
}
