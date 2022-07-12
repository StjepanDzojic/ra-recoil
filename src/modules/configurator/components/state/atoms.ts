import { ToppingsInfo } from "modules/configurator/types";
import { atom } from "recoil";

const toppings = atom<ToppingsInfo[]>({
  key: "configurator.toppings",
  default: [],
});

const size = atom<number>({
  key: "configurator.size",
  default: 10,
});

const discount = atom<number>({
  key: "configurator.discount",
  default: 0,
});

export const configuratorAtoms = { toppings, size, discount };
