import React from "react"
import { Button, Search, TodoCard } from "../../components"
import useList from "./hooks/useList"
import { Wrapper, TodoContainer } from "./style"
import rapptr_logo from "../../Assets/rapptr_logo.png"
import { useAuthContext } from "../../context/authContext"

const List = () => {
  const { logoutUser } = useAuthContext()
  const {
    todos,
    isNewTodoActive,
    handleOpenNewTodo,
    handleSaveNewTodo,
    handleEditTodo,
    handleDeleteTodo,
    searchValue,
    handlChangeSearch,
    newTodoValue,
    handleChangeNewTodo,
    handleSaveEditedTodo,
  } = useList()

  return (
    <Wrapper>
      <header className="header">
        <img src={rapptr_logo} alt="" />
        <div className="logout_button_container">
          <Button buttonText="Logout" onClick={logoutUser} />
        </div>
      </header>
      <h1>My To-Do List</h1>
      <TodoContainer>
        <div className="todo_wrapper">
          <div className="todo_header">
            <div className="search_container">
              <Search
                name="search"
                type="text"
                placeholder="Search"
                handleChange={handlChangeSearch}
                value={searchValue}
              />
            </div>
            <div className="button_container" onClick={handleOpenNewTodo}>
              <Button buttonText="New" />
            </div>
          </div>
          <ul className="todo_list">
            {isNewTodoActive && (
              <TodoCard
                isNewTodoActive={isNewTodoActive}
                newTodoValue={newTodoValue}
                handleChangeNewTodo={handleChangeNewTodo}
                handleSaveNewTodo={handleSaveNewTodo}
              />
            )}
            {todos.map((todo) => {
              return (
                <TodoCard
                  key={todo.id}
                  todoId={todo.id}
                  todoValue={todo.name}
                  isEditing={todo.isEditing}
                  handleEditTodo={handleEditTodo}
                  handleSaveEditedTodo={handleSaveEditedTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              )
            })}
          </ul>
        </div>
      </TodoContainer>
    </Wrapper>
  )
}

export default List
