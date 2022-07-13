import { Login } from "modules/auth/components/login/Login";
import { Configurator } from "modules/configurator/components/Configurator";
import { Dashboard } from "modules/dashboard/components/Dashboard";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/configurator" element={<Configurator />} />
    </Routes>
  );
};
