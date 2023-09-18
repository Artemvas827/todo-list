import { TodoType } from '../../App'
import { TodoItem } from '../TodoItem/TodoItem'
import { ChangeEvent, useState } from 'react'
//@ts-ignore
import s from './TodoList.module.css'
import { MySelect } from '../UI/MySelect/MySelect'

type TodoListPropsType = {
  todos: Array<TodoType>
  setTodos: any
}

export const TodoList: React.FC<TodoListPropsType> = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState('all')
  const options = ['all', 'completed', 'undone']
  const onOptionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  }

  if (!todos.length) {
    return <div className={s.noTodos}>There's nothing here yet...</div>
  }

  let filteredTodos: Array<TodoType> = []

  if (filter == 'all') {
    filteredTodos = todos
  }

  if (filter === 'completed') {
    filteredTodos = todos.filter((t) => t.status)
  }

  if (filter === 'undone') {
    filteredTodos = todos.filter((t) => !t.status)
  }

  return (
    <div className={s.todoList}>
      <div className={s.filter}>
        <MySelect options={options} onChange={onOptionChangeHandler}></MySelect>
      </div>
      {filteredTodos.map((t) => (
        <TodoItem key={t.id} todo={t} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  )
}
