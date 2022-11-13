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
        <img src={rapptr_logo} alt="Rapptr Labs" />
        <div className="logout__button__container">
          <Button buttonText="Logout" onClick={logoutUser} />
        </div>
      </header>
      <h1>My To-Do List</h1>
      <TodoContainer>
        <div className="todo__wrapper">
          <div className="todo__header">
            <div className="search__container">
              <Search
                name="search"
                type="text"
                placeholder="Search"
                handleChange={handlChangeSearch}
                value={searchValue}
              />
            </div>
            <div className="button__container" onClick={handleOpenNewTodo}>
              <Button buttonText="New" />
            </div>
          </div>
          <ul className="todo__list">
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
