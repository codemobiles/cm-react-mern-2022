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
      if (error) {
        res.json({ result: "nok", error });
        return;
      }

      const newProduct = new Products();
      newProduct.product_id = await generateSeq("product_id");
      newProduct.name = fields.name;
      newProduct.stock = Number(fields.stock);
      newProduct.price = Number(fields.price);

      console.log(JSON.stringify({ error, fields, files }));
      res.json({ error, fields, files });
    });
  }
}
