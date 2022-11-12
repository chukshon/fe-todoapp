import React from "react"
import { TodoT } from "../../../types/index"
import { v4 as uuidv4 } from "uuid"

function useList() {
  let localStorageTodos = JSON.parse(localStorage.getItem("todo")!)
  const [todos, setTodos] = React.useState<TodoT[]>(
    localStorageTodos ? localStorageTodos : []
  )
  const [filteredTodos, setFilteredTodos] = React.useState<TodoT[]>(
    localStorageTodos ? localStorageTodos : []
  )
  const [searchValue, setSearchValue] = React.useState("")
  const [isNewTodoActive, setIsNewTodoActive] = React.useState(false)
  const [newTodoValue, setNewTodoValue] = React.useState("")

  const Save = (tempTodo: any) => {
    setTodos(tempTodo)
    setFilteredTodos(tempTodo)
    localStorage.setItem("todo", JSON.stringify(tempTodo))
  }

  const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNewTodoValue(value)
  }

  const handlChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }

  const handleSearch = () => {
    let tempTodo = [...filteredTodos]
    if (searchValue) {
      tempTodo = tempTodo.filter((todo) => {
        return todo.name.toLowerCase().startsWith(searchValue.toLowerCase())
      })
    }
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
    const tempTodos = [...todos, newTodo]
    Save(tempTodos)
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
    Save(tempTodo)
  }

  const handleSaveEditedTodo = (id: string, value: string) => {
    const tempTodo = [...todos].map((todo) => {
      if (id === todo.id) {
        todo.name = value
        todo.isEditing = false
      }
      return todo
    })
    Save(tempTodo)
  }

  const handleDeleteTodo = (id: string) => {
    const tempTodo = [...todos].filter((todo) => {
      return todo.id !== id
    })
    Save(tempTodo)
  }

  React.useEffect(() => {
    handleSearch()
  }, [searchValue])

  return {
    todos,
    isNewTodoActive,
    handleOpenNewTodo,
    handleSaveNewTodo,
    handleEditTodo,
    handleDeleteTodo,
    searchValue,
    handleChangeNewTodo,
    newTodoValue,
    handleSaveEditedTodo,
    handlChangeSearch,
  }
}

export default useList
