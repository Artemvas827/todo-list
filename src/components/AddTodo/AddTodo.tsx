import {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  HTMLInputTypeAttribute,
  useState,
} from 'react'
//@ts-ignore
import s from './AddTodo.module.css'
import { TodoType } from '../../App'
import { MyInput } from '../UI/MyInput/MyInput'
import { MyButton } from '../UI/MyButton/MyButton'
import { validators } from '../../utils/validate'

type AddTodoPropsType = {
  setTodos: (todos: Array<TodoType>) => void
  todos: TodoType[]
}

export const AddTodo: React.FC<AddTodoPropsType> = ({ setTodos, todos }) => {
  const [todoText, setTodoText] = useState('')

  const onAddTodo = () => {
    const res = validators.validateString(todoText)
    if (res.error) {
      setTodoText(res.text)
      alert(res.error)
      return
    }
    const newTodo = {
      id: Date.now(),
      title: res.text,
      status: false,
    }
    setTodos([...todos, newTodo])
    setTodoText('')
  }

  return (
    <div className={s.addTodo}>
      <div>
        <MyInput
          value={todoText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodoText(e.currentTarget.value)
          }
          type="text"
        />
      </div>
      <div>
        <MyButton
          disabled={todoText.length == 0}
          small={false}
          onClick={onAddTodo}
        >
          Add todo
        </MyButton>
      </div>
    </div>
  )
}
