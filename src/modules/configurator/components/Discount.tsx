import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { configuratorAtoms } from "./state";

export const Discount: React.FC = () => {
  const [discount, setDiscount] = useState(0);
  const setDiscountState = useSetRecoilState(configuratorAtoms.discount);
  const [discountMessage, setDiscountMessage] = useState(false);

  function addDiscount() {
    setDiscountState(discount);
    setDiscountMessage(true); //indicator of applied Discount
    setTimeout(() => {
      setDiscountMessage(false);
    }, 5000);
    setDiscount(0);
  }
  return (
    <section>
      <label htmlFor="discount">Discount: </label>
      <input
        type="number"
        value={discount}
        onChange={(event) => {
          setDiscount(parseInt(event.currentTarget.value));
        }}
        name="discount"
        id="discount"
      />
      <button onClick={addDiscount}>Add discount</button>
      <p style={{ height: "16px" }}>{discountMessage && "Discount added!"}</p>
    </section>
  );
};
