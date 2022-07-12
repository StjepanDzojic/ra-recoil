import React, { useEffect, useState } from "react";
import { ToppingsInfo } from "modules/configurator";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { configuratorAtoms } from "./state";

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const setTopping = useSetRecoilState<ToppingsInfo[]>(
    configuratorAtoms.toppings
  );
  const resetPizzaDiscount = useResetRecoilState(configuratorAtoms.discount);

  useEffect(() => {
    if (checked) {
      //adding
      setTopping((currentState) => [...currentState, { name, price }]);
    } else {
      //removing
      setTopping((currentState) =>
        currentState.filter((ToppingsInfo) => ToppingsInfo.name !== name)
      );
    }
    resetPizzaDiscount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <li>
      <label htmlFor={name}>
        {name} {price}
      </label>
      <input
        type="checkbox"
        onChange={() => {
          setChecked(!checked);
        }}
        name={name}
        id={name}
        checked={checked}
      />
    </li>
  );
};
