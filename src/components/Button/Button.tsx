import React from "react"
import { ButtonStyled } from "./style"
import { Loader } from "../index"
export type Props = {
  disabled?: boolean
  buttonText: string
  loading?: boolean
  onClick?: () => void
}

const Button = ({ disabled, buttonText, onClick, loading }: Props) => {
  return (
    <ButtonStyled type="submit" disabled={disabled} onClick={onClick}>
      {loading ? <Loader /> : buttonText}
    </ButtonStyled>
  )
}

export default Button
