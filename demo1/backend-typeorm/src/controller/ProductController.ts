import { NextFunction, Request, Response } from "express";
import { Products } from "../entity/Products";
import { AppDataSource } from "../data-source";
import * as formidable from "formidable";
import { generateSeq, getFileName, uploadImage } from "../utils/cm-util";

export class ProductController {
  private productRepo = AppDataSource.getMongoRepository(Products);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.productRepo.find();
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
      newProduct.created = new Date();
      let doc: Products = await this.productRepo.save(newProduct);

      const fileName = getFileName(files, doc.product_id.toString());
      await uploadImage(files, fileName);
      await this.productRepo.update({ _id: doc._id }, { image: fileName });
      res.json({ result: "ok", message: { ...doc, image: fileName } });
    });
  }
}
