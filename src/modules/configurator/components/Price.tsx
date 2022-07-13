import React from "react";
import { useRecoilValue } from "recoil";
import { configuratorSelectors } from "./state";

export const Price: React.FC = () => {
  const totalPrice = useRecoilValue(configuratorSelectors.pizzaTotalPriceState);

  return (
    <section>
      <p>Total price: {totalPrice}$</p>
    </section>
  );
};
