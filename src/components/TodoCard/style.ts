import styled from "styled-components"

export const TodoWrapper = styled.li`
  list-style: none;
  margin-bottom: 8px;
  background: #f2f2f2;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: default;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  input {
    width: 70%;
    border: none;
    outline: none;
    font-size: 1.1rem;
    pointer-events: none;
    &.active {
      border: 2px solid;
      border-color: var(--border-color);
      padding: 5px 5px;
      pointer-events: visible;
    }
  }
  .action_btns {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      cursor: pointer;
    }
    &.icon {
      font-size: 5px;
      cursor: pointer;
    }
  }
  .save_btn {
    text-align: center;
    border: none;
    color: var(--white);
    font-size: 18px;
    outline: none;
    background: black;
    padding: 5px 20px;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s ease;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
