import { selector } from "recoil";
import { User } from "../types/User";
import { authAtoms } from "./atoms";

const user = selector<User>({
  key: "auth.user",
  get: ({ get }) => {
    const name = get(authAtoms.userName);
    const surname = get(authAtoms.userSurname);

    return { name, surname };
  },
});

export const authSelector = { user };
