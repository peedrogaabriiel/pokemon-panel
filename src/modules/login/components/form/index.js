import React, { useState, useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";
import routesNames from "../../../../router/routes-names";
import NavigationService from "../../../../services/navigation-service";
import { Creators as userAuthCreators } from "../../../../ducks/user-auth";

const Form = ({ setAuthenticated, authenticated }) => {
  useEffect(() => {
    if (authenticated) {
      NavigationService.push(routesNames.pokemon);
    } else {
      NavigationService.push(routesNames.login);
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    if (email === "pedro.daltoe86@gmail.com" && password === "123456") {
      setAuthenticated(true);
      localStorage.setItem("authenticated", true);
      NavigationService.push(routesNames.dragon);
    } else {
      e.preventDefault();
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const seeList = () => {
    localStorage.removeItem("authenticated");
    NavigationService.push(routesNames.pokemon);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form onSubmit={submit} className="form-signin">
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    required
                    type="email"
                    value={email}
                    className="form-control"
                    onChange={onChangeEmail}
                    placeholder="Insira seu e-mail"
                  />
                </div>

                <div className="form-group">
                  <label>Senha</label>
                  <input
                    required
                    type="password"
                    value={password}
                    className="form-control"
                    onChange={onChangePassword}
                    placeholder="Insira sua senha"
                  />
                </div>

                <button
                  type="button"
                  onClick={seeList}
                  className="btn btn-link text-uppercase"
                >
                  Entrar sem logar
                </button>

                <button
                  className="btn btn-outline-info btn-block text-uppercase"
                  type="submit"
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userAuth }) => ({
  authenticated: userAuth.authenticated,
});

const mapDispatchToProps = {
  setAuthenticated: userAuthCreators.setAuthenticated,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
