import styled from "styled-components";

export const ButtonElement = styled.button`
  width: 100%;
  min-width: 5rem;
  max-width: 10rem;
  padding: 0.25rem 1rem;
  border: 2px solid transparent;
  background-color: ${({ variant = "secondary" }) => `var(--${variant}-10)`};
  color: ${({ variant = "secondary" }) => `var(--${variant}-10-contrast)`};
  font-size: var(--font-size-md);
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: ${({ variant = "secondary" }) => `var(--${variant}-10)`};
    background-color: var(--primary-20);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--grey-10);

    &:hover {
      border-color: transparent;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: ${({ cols = 2 }) => `repeat(${cols}, 1fr)`};
  gap: 1rem;
  align-items: center;
`;
