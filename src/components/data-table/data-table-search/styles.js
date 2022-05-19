import styled from "styled-components";

export const DataSearchElement = styled.input`
  width: clamp(calc(var(--responsive-min) / 2), 50vw, var(--responsive-min));
  padding: 0.5rem 1rem;
  font-size: var(--font-size-xl);
  border: 2px solid transparent;
  border-radius: var(--border-radius-sm);

  &:focus {
    outline: none;
    border-color: var(--secondary-10);
  }
`;
