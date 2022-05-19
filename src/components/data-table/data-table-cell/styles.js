import styled from "styled-components";

export const DataCellElement = styled.input`
  width: 100%;
  padding: 0.25rem 0.5rem;
  font-size: var(--font-size-sm);
  font-weight: lighter;
  background-color: var(--grey-10);
  color: var(--primary-20);
  border: 2px solid transparent;
  border-top: 2px solid var(--secondary-10);
  border-bottom: 2px solid var(--secondary-10);
  transition: all 150ms ease-in-out;

  &:disabled {
    background-color: var(--primary-20);
    color: var(--primary-20-contrast);
    border: 2px solid transparent;
  }
`;
