import React from "react"
import { InputRowStyled, InputContainer } from "./style"
import { FaUserAlt } from "react-icons/fa"
export type Props = {
  inputType: string
}

const LoginInputField = ({ inputType }: Props) => {
  return inputType !== "password" ? (
    <InputRowStyled>
      <label htmlFor="email">Email</label>
      <InputContainer>
        <span>
          <FaUserAlt />
        </span>
        <input
          type="text"
          placeholder="user@rapptrlabs.com"
          // className="error"
        />
      </InputContainer>
    </InputRowStyled>
  ) : (
    <div>password</div>
  )
}

export default LoginInputField
