import { Routes, Route } from "react-router-dom";
import { RoutePath } from "../types/routes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profiles from "../pages/Profiles";
import Account from "../pages/Account";
import Config from "../pages/Config";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.PROFILES} element={<Profiles />} />
      <Route path={RoutePath.ACCOUNT} element={<Account />} />
      <Route path={RoutePath.CONFIG} element={<Config />} />
    </Routes>
  );
};

export default Router;
