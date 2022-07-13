import React, { useEffect, useState } from "react";
import { ToppingsInfo } from "modules/configurator";
import { useRecoilState, useResetRecoilState } from "recoil";
import { configuratorAtoms } from "./state";

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [topping, setTopping] = useRecoilState(configuratorAtoms.toppings);
  const resetPizzaDiscount = useResetRecoilState(configuratorAtoms.discount);

  useEffect(() => {
    const array = isChecked
      ? [...topping, { name, price }]
      : topping.filter((topping) => topping.name !== name);
    setTopping(array);
    resetPizzaDiscount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <li>
      <label htmlFor={name}>
        {name} {price}
      </label>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        name={name}
        id={name}
        checked={isChecked}
      />
    </li>
  );
};
