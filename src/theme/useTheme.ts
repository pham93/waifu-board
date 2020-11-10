import React from "react";
import { createMuiTheme } from "@material-ui/core";

export enum ThemeMode {
  DARK = "dark",
  LIGHT = "light"
}

export const useTheme = () => {
  const prefersDarkMode = true;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );
  return theme;
};
