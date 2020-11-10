import React from "react";
import { Avatar } from "@material-ui/core";
import { styled, useStyletron } from "styletron-react";
import { Theme, useTheme } from "@material-ui/core/styles";

const AvatarContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "100px",
  background: "white",
  padding: "5px",
  "box-sizing": "border-box"
});

const largeAvatar = (theme: Theme) => ({
  width: theme.spacing(14),
  height: theme.spacing(14)
});

/**
 * dummy
 */
export function AvatarCard(props: { name: string; src: string; sub: string }) {
  const { name, src, sub } = props;
  const theme = useTheme();
  const [css] = useStyletron();

  return (
    <AvatarContainer>
      {name}
      <Avatar alt={name} src={src} className={css({ width: "100px" })} />
    </AvatarContainer>
  );
}
