import { Routes, Route } from "react-router-dom";
import { RoutePath } from "../types/routes";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Login from "../pages/Login";
import Profiles from "../pages/Profiles";
import Account from "../pages/Account";
import Admin from "../pages/Admin";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.GAME} element={<Game />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.PROFILES} element={<Profiles />} />
      <Route path={RoutePath.ACCOUNT} element={<Account />} />
      <Route path={RoutePath.ADMIN} element={<Admin />} />
    </Routes>
  );
};

export default Router;
