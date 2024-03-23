import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import UserSelect from "./pages/UserSelect";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="user-select" element={<UserSelect />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </>
  ),
  // { basename: import.meta.env.DEV ? "/" : "/react-face-auth/" }
  { basename: "/" }
);

export default router;
