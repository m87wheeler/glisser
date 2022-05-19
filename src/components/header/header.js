import * as React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const HeaderElement = styled.h1`
  font-size: var(--font-size-h1);
  color: ${(p) => `var(--${p.variant}-10)`};
  text-align: ${(p) => p.align};
`;

const Header = ({
  children,
  align = "left",
  variant = "secondary",
  ...props
}) => {
  return (
    <HeaderElement align={align} variant={variant} {...props}>
      {children}
    </HeaderElement>
  );
};

Header.propTypes = {
  align: propTypes.oneOf(["left", "center", "right"]),
  variant: propTypes.oneOf(["primary", "secondary", "grey"]),
};

export default Header;
