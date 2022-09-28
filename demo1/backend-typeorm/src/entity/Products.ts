import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Products {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  product_id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  // default = "Date.now"
  @Column()
  created?: Date;

  @Column()
  __v?: number = 0;
}
