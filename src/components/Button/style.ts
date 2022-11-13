import styled from "styled-components"

export const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  color: #fff;
  font-size: 18px;
  outline: none;
  background: #3ec6f3;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #0dafe0;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`
