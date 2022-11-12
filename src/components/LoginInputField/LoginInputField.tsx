import React from "react"
import { InputRowStyled, InputContainer } from "./style"
import { FaUserAlt, FaLock } from "react-icons/fa"
export type Props = {
  type: "text" | "password" | "email"
  label: string
  placeholder: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  name: string
  error: string | undefined
  touched: boolean | undefined
  onBlur: (e: any) => void
}

const LoginInputField = ({
  type,
  label,
  placeholder,
  handleChange,
  value,
  name,
  error,
  touched,
  onBlur,
}: Props) => {
  return (
    <InputRowStyled>
      <label htmlFor={name}>{label}</label>
      <InputContainer>
        <span>{type !== "password" ? <FaUserAlt /> : <FaLock />}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          className={error && "error"}
        />
      </InputContainer>
      {error && touched && <p>{error}</p>}
    </InputRowStyled>
  )
}

export default LoginInputField
