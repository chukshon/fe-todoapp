import React from "react"
import { ButtonStyled } from "./style"

export type Props = {
  disabled?: boolean
  buttonText: string
}

const Button = ({ disabled, buttonText }: Props) => {
  return (
    <ButtonStyled type="submit" disabled={disabled}>
      {buttonText}
    </ButtonStyled>
  )
}

export default Button
