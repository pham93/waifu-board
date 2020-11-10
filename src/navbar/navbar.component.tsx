import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import React from "react";
import { useStyletron } from "styletron-react";

export function NavBar() {
  const [css] = useStyletron();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
        <Button>Use ME</Button>
      </Toolbar>
    </AppBar>
  );
}
