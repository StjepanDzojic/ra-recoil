import { selector } from "recoil";
import { configuratorAtoms } from "./atoms";

const toppingsTotalPrice = selector<number>({
  key: "configurator.toppings.totalPrice",
  get: ({ get }) => {
    const toppings = get(configuratorAtoms.toppings);
    const totalPrice = toppings.reduce(
      (previousPrice, { price }) => previousPrice + price,
      0
    );
    return totalPrice;
  },
});

const pizzaTotalPriceState = selector<number>({
  key: "configurator.pizza.totalPrice",
  get: ({ get }) => {
    const toppingsPrice = get(toppingsTotalPrice);
    const sizePrice = get(configuratorAtoms.size);
    const discount = get(configuratorAtoms.discount);
    let totalPrice = toppingsPrice + sizePrice - discount;
    if (totalPrice < 0) totalPrice = 0;
    return totalPrice;
  },
});

export const configuratorSelectors = {
  toppingsTotalPrice,
  pizzaTotalPriceState,
};
