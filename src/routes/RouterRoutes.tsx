import { BrowserRouter, Route, Routes } from "react-router";
import AppLayOut from "../common/appLayOut/AppLayOut";
import { HomePage } from "../pages/HomePage/HomePage";

export const RouterRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayOut />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
