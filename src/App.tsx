import { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList/TodoList'
import { AddTodo } from './components/AddTodo/AddTodo'
import { useLocalStorage } from 'usehooks-ts'

export type TodoType = {
  id: number
  title: string | undefined
  status: boolean
}

export const App = () => {
  const [todos, setTodos] = useLocalStorage<Array<TodoType>>('todos', [])

  return (
    <div className="wrap">
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  )
}
