import React from "react";

export const Size: React.FC = () => {
  return (
    <section>
      <label htmlFor="s">S</label>
      <input type="radio" value={7} id="s" name="size" />
      <label htmlFor="m">M</label>
      <input type="radio" value={10} id="m" name="size" />
      <label htmlFor="l">L</label>
      <input type="radio" value={13} id="l" name="size" />
    </section>
  );
};
