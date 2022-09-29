import { NextFunction, Request, Response } from "express";
import { Products } from "../entity/Products";
import { AppDataSource } from "../data-source";
import * as formidable from "formidable";
import {
  deleteFile,
  generateSeq,
  getFileName,
  uploadImage,
} from "../utils/cm-util";
import { TypedParamRequest } from "../types/Request.types";

export class ProductController {
  private productRepo = AppDataSource.getMongoRepository(Products);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.productRepo.find({ order: { ["created"]: "DESC" } });
  }

  async remove(
    req: TypedParamRequest<Products>,
    res: Response,
    next: NextFunction
  ) {
    let productToRemove = await this.productRepo.findOneBy({
      product_id: Number(req.params.product_id),
    });

    await this.productRepo.remove(productToRemove);
    await deleteFile(productToRemove.image);
    return { result: "ok" };
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
