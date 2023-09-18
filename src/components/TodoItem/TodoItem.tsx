import { TodoType } from '../../App'
import { MyButton } from '../UI/MyButton/MyButton'
import { MyInput } from '../UI/MyInput/MyInput'
//@ts-ignore
import s from './TodoItem.module.css'
import { ChangeEvent, useState } from 'react'

type TodoItemPropsType = {
  todo: TodoType
  todos: Array<TodoType>
  setTodos: any
}

export const TodoItem: React.FC<TodoItemPropsType> = ({
  todo,
  setTodos,
  todos,
}) => {
  const [editMode, setEditMode] = useState(false)
  const [editTodoText, setEditTodoText] = useState(todo.title)

  const updateTodo = (event: ChangeEvent) => {
    setTodos(
      todos.map((t) => {
        if (t.id == todo.id) {
          return { ...t, title: editTodoText }
        }
        return t
      })
    )
    setEditMode(false)
  }

  const setTodoStatus = (todoId: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id == todo.id) {
          return { ...t, status: !todo.status }
        }
        return t
      })
    )
  }

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter((t) => t.id !== todoId))
  }

  return (
    <div className={s.todoItem}>
      <div>
        {editMode ? (
          <div>
            <MyInput
              value={editTodoText}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEditTodoText(e.currentTarget.value)
              }
              onBlur={() => {
                setEditMode(false)
              }}
              autoFocus={true}
              type="text"
            />
            <MyButton onMouseDown={updateTodo}>Save</MyButton>
          </div>
        ) : (
          <span className={todo.status ? s.completed : ''}>{todo.title}</span>
        )}
      </div>
      <div>
        <div>
          <label id="status" htmlFor="input">
            Completed{' '}
          </label>
          <input
            onChange={() => {
              setTodoStatus(todo.id)
            }}
            checked={todo.status}
            type="checkbox"
            name=""
            id="status"
          />
        </div>
        <div>
          <MyButton small={true} onClick={() => setEditMode(true)}>
            Edit
          </MyButton>
        </div>
        <div>
          <MyButton small={true} onClick={() => deleteTodo(todo.id)}>
            Delete
          </MyButton>
        </div>
      </div>
    </div>
  )
}
