import styled from "styled-components"

export const InputRowStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-left: 10px;
  }
`

export const InputContainer = styled.div`
  position: relative;
  span {
    position: absolute;
    top: 10px;
    left: 15px;
  }
  input {
    height: 40px;
    outline: none;
    border-radius: 3px;
    border: 2px solid #ccc;
    transition: all 0.3s ease;
    padding-left: 40px;
    &.error {
      border: 2px solid #f89687;
      &:hover {
        border: 2px solid #f89687;
      }
    }
    &:focus {
      border-color: #8e49e8;
    }
    &:hover {
      border-color: #8e49e8;
    }
  }
`
