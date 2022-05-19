import * as React from "react";
import styled from "styled-components";

const HeaderElement = styled.h1`
  font-size: var(--font-size-h1);
  color: ${(p) => `var(--${p.variant}-10)`};
`;

const Header = ({ children, variant = "secondary", ...props }) => {
  return (
    <HeaderElement variant={variant} {...props}>
      {children}
    </HeaderElement>
  );
};

export default Header;
