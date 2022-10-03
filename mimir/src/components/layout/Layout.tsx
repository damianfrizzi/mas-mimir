import { GlobalStyle } from "components/GlobalStyles";
import { Navbar } from "components/layout/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </div>
  );
};
