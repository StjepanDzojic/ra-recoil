import React, { useEffect, useState } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { configuratorAtoms } from "./state";

export const Size: React.FC = () => {
  const [size, setSize] = useState<number>(10);
  const setPizzaSize = useSetRecoilState<number>(configuratorAtoms.size);
  const resetPizzaDiscount = useResetRecoilState(configuratorAtoms.discount);

  useEffect(() => {
    setPizzaSize(size);
    resetPizzaDiscount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  return (
    <section>
      <label htmlFor="s">S</label>
      <input
        type="radio"
        value={7}
        onClick={() => {
          setSize(7);
        }}
        id="s"
        name="size"
      />
      <label htmlFor="m">M</label>
      <input
        type="radio"
        value={10}
        onClick={() => {
          setSize(10);
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
          setSize(13);
        }}
        id="l"
        name="size"
      />
    </section>
  );
};
