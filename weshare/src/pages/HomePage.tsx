import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;