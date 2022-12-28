import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./router";
import AppHeader from "./compontents/app-header";
import AppFooter from "./compontents/app-footer";

const App = memo(() => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        {useRoutes(routes)}
        <AppFooter />
      </div>
    </Provider>
  );
});
export default App;
