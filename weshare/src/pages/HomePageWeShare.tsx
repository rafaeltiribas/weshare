import { NavLink, Outlet } from "react-router-dom";
import "../components/css/all.css";
import "../components/css/styles.css";
import "../components/css/bootstrap.css";

const HomePage = () => {
  return (
    <div>
      <div className="bgimage d-none d-md-block mb-4" style={{ marginTop: "69px" }}></div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Unindo corações, transformando vidas: Encontre sua causa, faça a diferença!</h1>
          <p className="lead">
            Explore, apoie e conecte-se com causas que importam. Nosso site agregador de ONGs oferece uma plataforma centralizada para descobrir, apoiar e colaborar com organizações dedicadas a causas humanitárias, ambientais, sociais e muito mais. Junte-se a nós para tornar o mundo um lugar melhor, uma doação de cada vez.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2">
          <h5>Categories</h5>
          <div className="nav flex-column nav-pills">
            <NavLink aria-current="page" className="nav-link" to="/">
              All
            </NavLink>
            <NavLink aria-current="page" className="nav-link" to="/health">
              Health
            </NavLink>
            <NavLink aria-current="page" className="nav-link" to="/food">
              Food
            </NavLink>
            <NavLink aria-current="page" className="nav-link" to="/child">
              Child
            </NavLink>
            <NavLink aria-current="page" className="nav-link" to="/education">
              Education
            </NavLink>
            <NavLink aria-current="page" className="nav-link" to="/environment">
              Environment
            </NavLink>
          </div>
        </div>
        <div className="col-lg-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
