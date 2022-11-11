import React from "react"
import { LoginInputField, Button } from "../../components"
import { LoginWrapper, Container, FormStyled, ButtonContainer } from "./style"

const Login = () => {
  return (
    <LoginWrapper>
      <Container>
        <h1>Rapptr Labs</h1>
        <FormStyled>
          <LoginInputField
            type="email"
            label="Email"
            placeholder="user@rapptrlabs.com"
          />
          <LoginInputField
            type="password"
            label="Password"
            placeholder="Must be at least 4 characters"
          />
          <ButtonContainer>
            <Button />
          </ButtonContainer>
        </FormStyled>
      </Container>
    </LoginWrapper>
  )
}

export default Login
