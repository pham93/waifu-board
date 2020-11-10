import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import App from "./App";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <App />
      </StyletronProvider>
    </RecoilRoot>
  </React.StrictMode>,
  rootElement
);
