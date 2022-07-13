import React from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { configuratorAtoms } from "./state";

export const Size: React.FC = () => {
  const setPizzaSize = useSetRecoilState(configuratorAtoms.size);
  const resetPizzaDiscount = useResetRecoilState(configuratorAtoms.discount);
  function handlePrice(value: number) {
    setPizzaSize(value);
    resetPizzaDiscount();
  }
  return (
    <section>
      <label htmlFor="s">S</label>
      <input
        type="radio"
        value={7}
        onClick={() => {
          handlePrice(7);
        }}
        id="s"
        name="size"
      />
      <label htmlFor="m">M</label>
      <input
        type="radio"
        value={10}
        onClick={() => {
          handlePrice(10);
        }}
        id="m"
        name="size"
        defaultChecked
      />
      <label htmlFor="l">L</label>
      <input
        type="radio"
        value={13}
        onClick={() => {
          handlePrice(13);
        }}
        id="l"
        name="size"
      />
    </section>
  );
};
