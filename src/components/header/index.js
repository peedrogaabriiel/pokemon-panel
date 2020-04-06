import React from "react";
import "./styles.css";
import NavigationService from "../../services/navigation-service";
import routesNames from "../../router/routes-names";
import { connect } from "react-redux";

const Header = ({ authenticated }) => {
  const logout = () => {
    localStorage.removeItem("authenticated");
    NavigationService.push(routesNames.login);
    window.location.reload();
    NavigationService.push(routesNames.login);
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="span">Pokémon</span>
      {authenticated ? (
        <div className="div-inline my-2 my-lg-0">
          <button className="button" onClick={logout}>
            Sair
          </button>
        </div>
      ) : null}
    </nav>
  );
};

const mapStateToProps = ({ userAuth }) => ({
  authenticated: userAuth.authenticated,
});

export default connect(mapStateToProps)(Header);
