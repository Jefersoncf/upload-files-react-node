import React from "react";
import Logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={Logo} width="112" height="28" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Inicio</a>

          <a className="navbar-item">Produtos</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Mais</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Sobre</a>
              <a className="navbar-item">Trabalhos</a>
              <a className="navbar-item">Contato</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Reporte um problema</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
