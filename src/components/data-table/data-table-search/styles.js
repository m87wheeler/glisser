import styled from "styled-components";

export const DataSearchElement = styled.input`
  width: clamp(15rem, 50vw, 30rem);
  padding: 0.5rem 1rem;
  font-size: var(--font-size-xl);
  border: 2px solid transparent;
  border-radius: var(--border-radius-sm);

  &:focus {
    outline: none;
    border-color: var(--secondary-10);
  }
`;
