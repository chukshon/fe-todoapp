import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #68eacc 0%, #497be8 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div`
  background: #fff;
  max-width: 400px;
  width: 100%;
  margin: 120px auto;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  .todo_header {
    display: flex;
    gap: 0.5em;
  }
  .search_container {
    width: 80%;
  }
  .button_container {
    width: 20%;
  }
`
