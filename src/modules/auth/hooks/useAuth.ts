import { useState } from "react";

export function useAuth() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return { name, surname, setName, setSurname };
}
