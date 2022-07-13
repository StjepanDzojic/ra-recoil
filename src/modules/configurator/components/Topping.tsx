import React, { useEffect, useState } from "react";
import { ToppingsInfo } from "modules/configurator";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { configuratorAtoms } from "./state";

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const setTopping = useSetRecoilState(configuratorAtoms.toppings);
  const resetPizzaDiscount = useResetRecoilState(configuratorAtoms.discount);

  useEffect(() => {
    if (isChecked) {
      //adding
      setTopping((currentState) => [...currentState, { name, price }]);
    } else {
      //removing
      setTopping((currentState) =>
        currentState.filter((topping) => topping.name !== name)
      );
    }
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
