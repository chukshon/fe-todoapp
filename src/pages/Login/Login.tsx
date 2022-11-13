import React from "react"
import { LoginInputField, Button } from "../../components"
import { LoginWrapper, Container, FormStyled, ButtonContainer } from "./style"
import useLogin from "./hooks/useLogin"
import rapptr_logo_black from "../../Assets/rapptr_logo_black.png"
import { useAuthContext } from "../../context/authContext"

const Login = () => {
  const { message, showErrorAlert, isLoading } = useAuthContext()
  const { LoginFormik } = useLogin()
  return (
    <LoginWrapper>
      <img src={rapptr_logo_black} alt="Rapptr Labs" />
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
            <Button
              disabled={!LoginFormik.isValid || isLoading}
              buttonText="Login"
              loading={isLoading}
            />
          </ButtonContainer>
        </FormStyled>
        {showErrorAlert && <p className="error__message">{message}</p>}
      </Container>
    </LoginWrapper>
  )
}

export default Login
