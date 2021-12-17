import todoList, {
  onTextUpdated,
  onTaskAdded,
  onTaskRemoved,
  onTaskToggled,
} from './todo-list'

it('should initialize the state', () => {
  const beforeState = undefined
  const action = { type: 'unknown' }
  const afterState = {
    text: '',
    tasks: [],
  }

  const state = todoList(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should update the text', () => {
  const beforeState = {
    text: 'Something',
    tasks: [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ],
  }
  const action = onTextUpdated('Something else')
  const afterState = {
    text: 'Something else',
    tasks: [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ],
  }

  const state = todoList(beforeState, action)

  expect(state).toEqual(afterState)
  expect(state.tasks).toBe(beforeState.tasks)
})

it('should add a new task', () => {
  const beforeState = {
    text: 'Forget everything',
    tasks: [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
    ],
  }
  const action = onTaskAdded('Forget everything')
  const afterState = {
    text: '',
    tasks: [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ],
  }

  const state = todoList(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should remove a task', () => {
  const beforeState = {
    text: '',
    tasks: [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ],
  }
  const action = onTaskRemoved(2)
  const afterState = {
    text: '',
    tasks: [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 3, text: 'Forget everything' },
    ],
  }

  const state = todoList(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should toggle of the "completed" property on a task', () => {
  const beforeState = {
    text: '',
    tasks: [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ],
  }
  const action = onTaskToggled(2)
  const afterState = {
    text: '',
    tasks: [
      { id: 1, text: 'Learn Redux', completed: true },
      { id: 2, text: 'Look for a job', completed: true },
      { id: 3, text: 'Forget everything' },
    ],
  }

  const state = todoList(beforeState, action)

  expect(state).toEqual(afterState)
})
