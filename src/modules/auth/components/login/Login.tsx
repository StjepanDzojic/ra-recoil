import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useAuth } from "../../hooks/useAuth";
import { authAtoms } from "../../state/atoms";
import { authSelector } from "../../state/selectors";
import { useNavigate } from "react-router-dom";
import { layoutAtoms } from "modules/shared/state/atoms";

export const Login: React.FC = () => {
  const [darkMode, setDarkMode] = useRecoilState(layoutAtoms.darkMode);
  const { name, surname, setName, setSurname } = useAuth();
  const setUserName = useSetRecoilState(authAtoms.userName);
  const setUserSurname = useSetRecoilState(authAtoms.userSurname);
  const user = useRecoilValue(authSelector.user);
  const navigate = useNavigate();

  function hanleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUserName(name);
    setUserSurname(surname);
  }

  useEffect(() => {
    if (user.name && user.surname) navigate("/dashboard");
  }, [navigate, user]);

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={hanleOnSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            id="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{user.name}</p>
      <p>{user.surname}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark mode" : "Light mode"}
      </button>
    </section>
  );
};
