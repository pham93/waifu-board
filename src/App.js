import { ThemeProvider } from "@material-ui/core/styles";

import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import "./styles.css";
import { useTheme } from "./theme/useTheme";
import { Dashboard } from "./views/dashboard.component";

export default function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
