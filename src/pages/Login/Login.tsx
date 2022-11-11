import React from "react"
import { LoginInputField, Button } from "../../components"
import { LoginWrapper, Container, FormStyled, ButtonContainer } from "./style"
import useLogin from "./useLogin"

const Login = () => {
  const { LoginFormik } = useLogin()
  return (
    <LoginWrapper>
      <Container>
        <h1>Rapptr Labs</h1>
        <FormStyled onSubmit={LoginFormik.handleSubmit}>
          <LoginInputField
            name="email"
            type="email"
            label="Email"
            placeholder="user@rapptrlabs.com"
            handleChange={LoginFormik.handleChange}
            value={LoginFormik.values.email}
            onBlur={LoginFormik.handleBlur}
            error={LoginFormik.errors.email}
            touched={LoginFormik.touched.email}
          />
          <LoginInputField
            name="password"
            type="password"
            label="Password"
            placeholder="Must be at least 4 characters"
            handleChange={LoginFormik.handleChange}
            value={LoginFormik.values.password}
            onBlur={LoginFormik.handleBlur}
            error={LoginFormik.errors.password}
            touched={LoginFormik.touched.password}
          />
          <ButtonContainer>
            <Button disabled={!LoginFormik.isValid} buttonText="Login" />
          </ButtonContainer>
        </FormStyled>
      </Container>
    </LoginWrapper>
  )
}

export default Login
