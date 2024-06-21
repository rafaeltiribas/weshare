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
        <div className="col">
          <div className="nav nav-pills flex-row justify-content-center">
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
      </div>

      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container">
          <div>
            <Outlet />
          </div>
        </div>
      </div>

      <div className="jumbotron mb-4">
        <h4 className="mb-3">Depoimentos de pessoas que usam o SuaOng</h4>
        <div className="row">
          <div className="col-lg-6">
            <blockquote className="blockquote">
              <p>"Encontrei a ONG perfeita para fazer doações regulares através deste site! Eles têm uma variedade incrível de organizações, desde aquelas que ajudam crianças carentes até aquelas que protegem o meio ambiente. Estou feliz por poder contribuir para causas que realmente importam."</p>
              <footer className="blockquote-footer">
                Luis Gustavo Pereira Filho
              </footer>
            </blockquote>
          </div>
          <div className="col-lg-6">
            <blockquote className="blockquote">
              <p>"Graças a este site, pude encontrar uma ONG local que precisava de voluntários para ajudar em eventos comunitários. Foi uma experiência gratificante e transformadora poder contribuir positivamente para minha comunidade. Recomendo a todos que queiram fazer a diferença!"</p>
              <footer className="blockquote-footer">
                Roberto Silveira Pinto
              </footer>
            </blockquote>
          </div>
          <div className="col-lg-6">
            <blockquote className="blockquote">
              <p>"Este site tornou mais fácil encontrar organizações que trabalham em questões específicas que me preocupam, como direitos humanos e igualdade de gênero. Agora posso direcionar minhas doações e voluntariado para as causas que mais me tocam, tudo em um só lugar. É uma ferramenta incrível para quem quer fazer a diferença."</p>
              <footer className="blockquote-footer">
                Sandra Pereira da Silva
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-sm-7">
              <h5>Nosso Escritório</h5>
              <ul className="list-unstyled">
                <li><i>R. Mario Santos Braga, 30 - Centro, Niterói - RJ, 24020-140</i></li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-7">
              <h5>Ong's Parceiras</h5>
              <ul className="list-unstyled">
                <li><a href='#'>Greenpeace</a></li>
                <li><a href='#'>Graac</a></li>
                <li><a href='#'>Médicos sem Fronteiras</a></li>
                <li><a href='#'>Instituto Caramelo</a></li>
                <li><a href='#'>Instituto Ayrton Senna</a></li>
                <li><a href='#'>Feeding America</a></li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-5">
              <h5>LinkedIn</h5>
              <ul className="list-unstyled">
                <li><a href='https://www.linkedin.com/in/rafaeltiribas/'>Rafael Tiribás</a></li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-7">
              <h5>Contato</h5>
              <ul className="list-unstyled">
                <li><i className="fas fa-user"></i> Rafael</li>
                <li><i className="fas fa-phone"></i> (99)99999-9999</li>
                <li><i className="fas fa-envelope-square"></i> <a href='mailto:popo@pb.dum.br'>suaong@suaong.com.br</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
