import styled from "styled-components"

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
    border: 2px solid #ccc;
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
      border-color: #3ec6f3;
    }
    &:hover {
      border-color: #3ec6f3;
    }
  }
`
