import { NavLink } from "react-router-dom";
import suaonglogo from "/suaong-logo.webp";
import "./css/all.css";
import "./css/styles.css";
import "./css/bootstrap.css";
//import cart from "/cart.png";

function NavBar() {
    return (
      <>
        <nav className="navbar navbar-light bg-light navbar-expand-md">
            <div  className="container">
                <img className="d-none d-md-block" src={suaonglogo} style={{ width: "90px" }} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu"
                        aria-controls="menu" aria-expanded="false" aria-label="Botão de navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <div className="navbar-nav mr-auto">
                    <NavLink aria-current="page" className="nav-link" to="/">
                        <h2>WeShare</h2>
                    </NavLink>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="">Ongs</a>
                    </div>
                    </div>

                    <div className="navbar-nav">
                    <a className="nav-link nav-item" href="">
                        <i className="fa-solid fa-right-to-bracket"></i> Login</a>
                        <a className="nav-link nav-item" href="">Signup</a>
                        <a className="nav-link nav-item" href="">Donation</a>
                        <NavLink aria-current="page" className="nav-link" to="/nongov-list">
                            Admin
                        </NavLink>
                    </div>                
                </div>
            </div>
        </nav>
        
      </>
    );
  }
  export default NavBar;
  