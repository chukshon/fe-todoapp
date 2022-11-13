import React from "react"
import { ButtonStyled } from "./style"

export type Props = {
  disabled?: boolean
  buttonText: string
  loading?: boolean
  onClick?: () => void
}

const Button = ({ disabled, buttonText, onClick }: Props) => {
  return (
    <ButtonStyled type="submit" disabled={disabled} onClick={onClick}>
      {buttonText}
    </ButtonStyled>
  )
}

export default Button
