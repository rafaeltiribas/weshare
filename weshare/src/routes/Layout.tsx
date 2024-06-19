import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBarWeshare";
// criar mais stylesheet e importar aqui

function Layout() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}
export default Layout;