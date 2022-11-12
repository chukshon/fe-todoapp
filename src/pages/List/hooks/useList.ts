import React from "react"
import { TodoT } from "../../../types/index"
import { v4 as uuidv4 } from "uuid"

function useList() {
  const [todos, setTodos] = React.useState<TodoT[]>([])
  const [searchValue, setSearchValue] = React.useState("")
  const [isNewTodoActive, setIsNewTodoActive] = React.useState(false)
  const [newTodoValue, setNewTodoValue] = React.useState("")

  const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNewTodoValue(value)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const tempTodo = [...todos].filter((todo) => {
      if (todo.name.toLowerCase() === value.toLowerCase()) {
        todo.isEditing = true
      }
      return todo
    })
    setTodos(tempTodo)
  }

  const handleOpenNewTodo = () => {
    setIsNewTodoActive(true)
  }

  const handleSaveNewTodo = () => {
    const newTodo = {
      id: uuidv4(),
      name: newTodoValue,
      isEditing: false,
    }
    setTodos([...todos, newTodo])
    setIsNewTodoActive(false)
    setNewTodoValue("")
  }

  const handleEditTodo = (id: string | undefined) => {
    const tempTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true
      }
      return todo
    })
    setTodos(tempTodo)
  }

  const handleSaveEditedTodo = (id: string, value: string) => {
    const tempTodo = [...todos].map((todo) => {
      if (id === todo.id) {
        todo.name = value
        todo.isEditing = false
      }
      return todo
    })
    setTodos(tempTodo)
  }

  const handleDeleteTodo = (id: string) => {
    const tempTodo = [...todos].filter((todo) => {
      return todo.id !== id
    })
    setTodos(tempTodo)
  }
  return {
    todos,
    isNewTodoActive,
    handleOpenNewTodo,
    handleSaveNewTodo,
    handleEditTodo,
    handleDeleteTodo,
    searchValue,
    handleSearch,
    handleChangeNewTodo,
    newTodoValue,
    handleSaveEditedTodo,
  }
}

export default useList
