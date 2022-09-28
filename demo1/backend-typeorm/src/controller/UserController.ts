import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcryptjs";
import { savedValue } from "../utils/cm-util";

export class UserController {
  // private userRepository = getRepository(User)
  private userRepository = AppDataSource.getMongoRepository(Users);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async register(req: any, res: Response, next: NextFunction) {
    try {
      req.body.created = savedValue(req.body.created, new Date());
      req.body.level = savedValue(req.body.level, "normal");
      req.body.__v = savedValue(req.body.__v, 0);

      req.body.password = await bcrypt.hash(req.body.password, 8);
      const doc = await this.userRepository.save(req.body);
      return { result: "ok", message: doc };
    } catch (e) {
      return { result: "nok", message: "invalid data" };
    }
  }
}
