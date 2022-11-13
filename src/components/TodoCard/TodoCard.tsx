import React from "react"
import { TodoWrapper } from "./style"
import { MdDelete } from "react-icons/md"
import { GrEdit } from "react-icons/gr"

export type Props = {
  todoId?: string
  isNewTodoActive?: boolean
  newTodoValue?: string
  handleChangeNewTodo?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSaveNewTodo?: () => void
  todoValue?: string
  isEditing?: boolean
  handleEditTodo?: (id: string | undefined) => void
  handleSaveEditedTodo?: (id: string, value: string) => void
  handleDeleteTodo?: (id: string) => void
}
const TodoCard = ({
  isNewTodoActive,
  newTodoValue,
  handleChangeNewTodo,
  handleSaveNewTodo,
  todoValue,
  isEditing,
  handleEditTodo,
  todoId,
  handleSaveEditedTodo,
  handleDeleteTodo,
}: Props) => {
  const [tempTodoValue, setTempTodoValue] = React.useState(todoValue)
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTempTodoValue(value)
  }
  return (
    <>
      {isNewTodoActive ? (
        <TodoWrapper>
          <input
            type="text"
            name="todo"
            value={newTodoValue}
            className={!isNewTodoActive ? "" : "active"}
            readOnly={!isNewTodoActive}
            onChange={handleChangeNewTodo}
          />
          <button
            className="save__btn"
            onClick={handleSaveNewTodo}
            disabled={!newTodoValue || newTodoValue.length > 25}
          >
            Save
          </button>
        </TodoWrapper>
      ) : (
        <TodoWrapper>
          <input
            type="text"
            name="todo"
            value={tempTodoValue}
            className={!isEditing ? "" : "active"}
            readOnly={!isEditing}
            onChange={handleEditChange}
          />
          {!isEditing && (
            <div className="action__btns">
              <span
                className="icon"
                onClick={() => handleDeleteTodo?.(todoId!)}
              >
                {<MdDelete size={30} />}
              </span>
              <span className="icon" onClick={() => handleEditTodo?.(todoId)}>
                {<GrEdit size={30} />}
              </span>
            </div>
          )}
          {isEditing && (
            <button
              className="save__btn"
              onClick={() => handleSaveEditedTodo?.(todoId!, tempTodoValue!)}
              disabled={!tempTodoValue || tempTodoValue.length > 25}
            >
              Save
            </button>
          )}
        </TodoWrapper>
      )}
    </>
  )
}

export default TodoCard
