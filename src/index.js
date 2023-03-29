import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "global-context-store";

// We'll use <Helmet /> to link to an external stylesheet
// for the @blueprintjs/icons peer dependency. We also import
// additional base styles here:
import { Helmet } from "react-helmet";
import "annotation-toolkit/build/main.css";
import "@blueprintjs/core/lib/css/blueprint.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* Link to @blueprintjs/icons styles from a CDN here: */}
    <Helmet>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@blueprintjs/icons@3.26.0/lib/css/blueprint-icons.css"
      />
      <link
        href="https://unpkg.com/label-studio@0.7.3/build/static/css/main.09b8161e.css"
        rel="stylesheet"
      />
    </Helmet>

    <Store>
      <App />
    </Store>
  </StrictMode>,
  rootElement
);
