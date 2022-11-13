import styled from "styled-components"

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0px 20px;
  img {
    position: fixed;
    top: 20px;
    width: 380px;
    height: 50px;
  }
`

export const Container = styled.div`
  margin: 50px auto;
  max-width: 400px;
  width: 100%;
  h1 {
    margin-top: 50px;
    text-align: center;
    letter-spacing: 3px;
  }
`

export const FormStyled = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonContainer = styled.div`
  height: 50px;
`
