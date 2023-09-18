import { renderHook, act } from '@testing-library/react'
import { App, TodoType } from './App'
import { useLocalStorage } from 'usehooks-ts'

describe('Test app component', () => {
  let todos: Array<TodoType> = []

  beforeEach(() => {
    todos = [
      { id: 1, title: 'task 1', status: false },
      { id: 2, title: 'task 2', status: false },
      { id: 3, title: 'task 3', status: false },
    ]
  })

  test('Local storage contains 3 item', () => {
    const data = renderHook(() =>
      useLocalStorage<Array<TodoType>>('todos', todos)
    )
    expect(data.result.current[0].length).toBe(3)
  })

  test('Add todo. Todo count shold be 4', () => {
    const data = renderHook(() =>
      useLocalStorage<Array<TodoType>>('todos', todos)
    )

    const func = data.result.current[1]

    act(() => {
      const newTodo = {
        id: Date.now(),
        title: 'task 434',
        status: false,
      }
      func([...todos, newTodo])
    })

    expect(data.result.current[0].length).toBe(4)
  })

  test('Delete todo. Todo count shold be 2', () => {
    const data = renderHook(() =>
      useLocalStorage<Array<TodoType>>('todos', todos)
    )

    const func = data.result.current[1]

    const todoId = 2

    act(() => {
      func(todos.filter((t) => t.id !== todoId))
    })

    expect(data.result.current[0].length).toBe(2)
  })
})
