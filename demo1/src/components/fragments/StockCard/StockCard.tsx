import * as React from "react";

// icon={AddShoppingCart}
// title="TOTAL"
// subtitle="112 THB"
// color="#00a65a"

type StockCardProps = {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
};

const StockCard: React.FC<StockCardProps> = (props) => {
  return <div>{props.title}</div>;
};

export default StockCard;
