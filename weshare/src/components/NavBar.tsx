import { Link } from "react-router-dom";
import suaonglogo from "/suaong-logo.webp";
import cart from "/cart.png";
// criar mais stylesheet e importar aqui

function NavBar() {
  return (
      <>
        <div className="container mt-3 mb-2">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
              <Link to="/" style={{ textDecoration: "none", fontSize: "16px" }}>
                <img className="d-none d-md-block" src={suaonglogo} style={{ width: "70px" }} />
                WeShare
              </Link>
            </div>
            <div className="col-6">
              <ul style={{ listStyleType: "none" }}>
                <li className="mt-2 d-flex justify-content-center">
                  Faça seu
                  <Link className="ms-1" to="/login" style={{ textDecoration: "none" }}>
                    login!
                  </Link>
                </li>
                <li className="d-flex justify-content-center">
                  <Link to="/cadastrar-produto" style={{ textDecoration: "none" }}>
                    Cadastro
                  </Link>
                </li>
                <li className="d-flex justify-content-center">
                  <Link to="/listar-produtos" style={{ textDecoration: "none" }}>
                    Listar produtos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end">
              <ul style={{ listStyleType: "none" }}>
                <li className="mt-2 d-flex justify-content-center">
                  <Link to="/carrinho" style={{ textDecoration: "none" }}>
                    <img className="d-none d-md-block" src={cart} style={{ width: "35px" }} />
                    Carrinho
                  </Link>
                </li>
                <li className="d-flex justify-content-center">
                  R$ {10.00.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-danger" style={{ padding: "3px" }}></div>
      </>
    );
  }
  export default NavBar;
  