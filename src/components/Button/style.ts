import styled from "styled-components"

export const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  color: var(--white);
  font-size: 18px;
  outline: none;
  background: var(--light-blue);
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: var(--dark-blue);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`
