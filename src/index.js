import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import ErrorBoundry from "./common/genericComponents/ErrorBoundry";
import { ToolShopApiProvider } from "./api/toolShopApiContext";
import "./index.css";
import App from "./app/App";
import ToolsShopApi from "./api/toolShopApi";
import history from './history';

const toolsShopApi = new ToolsShopApi();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <ToolShopApiProvider value={toolsShopApi}>
        <Router history={history}>
          <App />
        </Router>
      </ToolShopApiProvider>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);
