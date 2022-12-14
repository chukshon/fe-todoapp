import styled from "styled-components"

export const InputRowStyled = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-left: 10px;
  }
  p {
    color: red;
  }
`

export const InputContainer = styled.div`
  position: relative;
  span {
    position: absolute;
    top: 15px;
    left: 15px;
  }
  input {
    height: 50px;
    outline: none;
    border-radius: 3px;
    border: 2px solid;
    border-color: var(--border-color);
    transition: all 0.3s ease;
    padding-left: 40px;
    &.error {
      border: 2px solid red;
      &:hover {
        border: 2px solid red;
      }
      &:focus {
        border-color: red;
      }
    }
    &:focus {
      border-color: var(--light-blue);
    }
    &:hover {
      border-color: var(--light-blue);
    }
  }
`
