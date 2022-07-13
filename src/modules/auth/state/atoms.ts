import { atom } from "recoil";

const userName = atom<string>({
  key: "auth.user.name",
  default: "",
});

const userSurname = atom<string>({
  key: "auth.user.surname",
  default: "",
});

export const authAtoms = { userName, userSurname };
