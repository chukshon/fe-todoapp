import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #68eacc 0%, #497be8 100%);
  h1 {
    text-align: center;
    margin-top: 70px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 10px 20px;
    img {
      width: 150px;
      height: 60px;
    }
    .logout_button_container {
      height: 40px;
      width: 80px;
    }
  }
`

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 720px) {
    margin: 0px 20px;
  }
  .todo_wrapper {
    background: var(--white);
    max-width: 600px;
    width: 100%;
    margin: 50px auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    .todo_header {
      display: flex;
      gap: 0.5rem;
    }
    .search_container {
      width: 80%;
    }
    .button_container {
      width: 20%;
    }
    .todo_list {
      margin-top: 20px;
    }
  }
`
