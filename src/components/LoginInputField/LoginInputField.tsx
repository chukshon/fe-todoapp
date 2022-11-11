import React from "react"
import { InputRowStyled, InputContainer } from "./style"
import { FaUserAlt, FaLock } from "react-icons/fa"
export type Props = {
  type: "text" | "password" | "email"
  label: string
  placeholder: string
}

const LoginInputField = ({ type, label, placeholder }: Props) => {
  return (
    <InputRowStyled>
      <label htmlFor="email">{label}</label>
      <InputContainer>
        <span>{type !== "password" ? <FaUserAlt /> : <FaLock />}</span>
        <input
          type={type}
          placeholder={placeholder}
          // className="error"
        />
      </InputContainer>
    </InputRowStyled>
  )
}

export default LoginInputField
