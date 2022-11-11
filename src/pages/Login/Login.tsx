import React from "react"
import { LoginInputField } from "../../components"
import { LoginWrapper, Container } from "./style"

const Login = () => {
  return (
    <LoginWrapper>
      <Container>
        <h1>Rapptr Labs</h1>
        <form>
          <LoginInputField inputType="email" />
          <LoginInputField inputType="email" />
        </form>
      </Container>
    </LoginWrapper>
  )
}

export default Login
