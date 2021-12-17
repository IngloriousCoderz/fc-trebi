import { onTaskAdded, onTaskRemoved, onTaskToggled } from './todo-list'
import tasks from './tasks'

it('should initialize the state', () => {
  const beforeState = undefined
  const action = { type: 'unknown' }
  const afterState = []

  const state = tasks(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should add a new task', () => {
  const beforeState = [
    { id: 1, text: 'Learn Redux', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
  ]
  const action = onTaskAdded('Forget everything')
  const afterState = [
    { id: 1, text: 'Learn Redux', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ]

  const state = tasks(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should remove a task', () => {
  const beforeState = [
    { id: 1, text: 'Learn Redux', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ]
  const action = onTaskRemoved(2)
  const afterState = [
    { id: 1, text: 'Learn Redux', completed: true },
    { id: 3, text: 'Forget everything' },
  ]

  const state = tasks(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should toggle of the "completed" property on a task', () => {
  const beforeState = [
    { id: 1, text: 'Learn Redux', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ]
  const action = onTaskToggled(2)
  const afterState = [
    { id: 1, text: 'Learn Redux', completed: true },
    { id: 2, text: 'Look for a job', completed: true },
    { id: 3, text: 'Forget everything' },
  ]

  const state = tasks(beforeState, action)

  expect(state).toEqual(afterState)
})
