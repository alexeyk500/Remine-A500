import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import "./customColors.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

console.log(`Redmine-A500 version ${process.env.REACT_APP_VERSION} successfully started`);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
