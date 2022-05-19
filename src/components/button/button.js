import * as React from "react";
import { ButtonElement, ButtonGroup } from "./styles";

const Button = ({ children, ...props }) => {
  return <ButtonElement {...props}>{children}</ButtonElement>;
};

export { ButtonGroup };

export default Button;
