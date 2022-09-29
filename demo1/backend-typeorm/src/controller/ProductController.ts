import { NextFunction, Request, Response } from "express";
import { Products } from "../entity/Products";
import { AppDataSource } from "../data-source";
import * as formidable from "formidable";

export class ProductController {
  private productRepository = AppDataSource.getMongoRepository(Products);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.productRepository.find();
  }

  async add(req: Request, res: Response, next: NextFunction) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields: any, files) => {
      console.log(JSON.stringify({ error, fields, files }));
    });
  }
}
