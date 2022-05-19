import styled from "styled-components";

export const DataTableContainer = styled.div`
  width: 100%;
  max-width: var(--responsive-max);
  min-width: var(--responsive-min);
  margin: 0 auto;
  padding: 1rem;
  background-color: var(--primary-20);
  border-radius: var(--border-radius-md);
  border: 2px solid transparent;
  overflow: hidden;
  transition: border-color 300ms ease-in-out;

  &:hover {
    border-color: var(--secondary-10);
  }
`;

export const DataTableElement = styled.table`
  width: 100%;
  padding: 1rem;
  border-collapse: collapse;

  th {
    padding: 0.25rem 0.5rem;
    color: var(--primary-20-contrast);
    font-weight: 600;
    text-align: left;
  }
`;
