import React from "react"
import { Button, Search, TodoCard } from "../../components"
import useList from "./hooks/useList"
import { Wrapper, Container } from "./style"

const List = () => {
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
      <h1>My Todo List</h1>
      <Container>
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
              handleEditTodo={handleEditTodo}
              handleSaveEditedTodo={handleSaveEditedTodo}
              handleDeleteTodo={handleDeleteTodo}
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
      </Container>
    </Wrapper>
  )
}

export default List
