import * as React from "react";
import PropTypes from "prop-types";
import { ButtonElement, ButtonGroup } from "./styles";

const Button = ({ children, ...props }) => {
  return <ButtonElement {...props}>{children}</ButtonElement>;
};

export { ButtonGroup };

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
