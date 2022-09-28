import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcryptjs";

export class UserController {
  // private userRepository = getRepository(User)
  private userRepository = AppDataSource.getMongoRepository(Users);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async register(req: Request, res: Response, next: NextFunction) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    await this.userRepository.insertOne(req.body);
    return { result: "ok" };
  }
}
