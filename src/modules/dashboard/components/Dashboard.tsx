import { authAtoms } from "modules/auth/state/atoms";
import { authSelector } from "modules/auth/state/selectors";
import { layoutAtoms } from "modules/shared/state/atoms";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

export const Dashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useRecoilState(layoutAtoms.darkMode);
  const user = useRecoilValue(authSelector.user);
  const resetName = useResetRecoilState(authAtoms.userName);
  const resetSurname = useResetRecoilState(authAtoms.userSurname);
  const navigate = useNavigate();

  function handleLogout() {
    resetName();
    resetSurname();
  }

  useEffect(() => {
    if (!user.name && !user.surname) navigate("/");
  }, [navigate, user]);

  return (
    <section>
      <h1>Dashboard</h1>
      <p>{user.name}</p>
      <p>{user.surname}</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark mode" : "Light mode"}
      </button>
    </section>
  );
};
