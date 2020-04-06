import React, { useEffect, useState } from "react";
import "./App.css";
import store from "./ducks";
import Router from "./router/router";
import HttpService from "./services";
import { Provider } from "react-redux";
import Header from "./components/header";

const App = () => {
  useEffect(() => {
    HttpService.initialize();
    setReady(true);
  }, []);

  const [ready, setReady] = useState(false);

  return ready ? (
    <Provider store={store}>
      <Header />
      <Router />
    </Provider>
  ) : null;
};

export default App;
