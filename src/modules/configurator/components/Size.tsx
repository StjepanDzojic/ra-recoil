import React from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { configuratorAtoms } from "./state";

export const Size: React.FC = () => {
  const setPizzaSize = useSetRecoilState(configuratorAtoms.size);
  const resetPizzaDiscount = useResetRecoilState(configuratorAtoms.discount);

  return (
    <section>
      <label htmlFor="s">S</label>
      <input
        type="radio"
        value={7}
        onClick={() => {
          setPizzaSize(7);
          resetPizzaDiscount();
        }}
        id="s"
        name="size"
      />
      <label htmlFor="m">M</label>
      <input
        type="radio"
        value={10}
        onClick={() => {
          setPizzaSize(10);
          resetPizzaDiscount();
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
          setPizzaSize(13);
          resetPizzaDiscount();
        }}
        id="l"
        name="size"
      />
    </section>
  );
};
