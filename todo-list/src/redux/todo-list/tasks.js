import { ON_TASK_ADDED, ON_TASK_REMOVED, ON_TASK_TOGGLED } from './action-types'

export default function tasks(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case ON_TASK_ADDED:
      const maxId = state.length ? state[state.length - 1].id : 0
      return [...state, { id: maxId + 1, text: payload }]

    case ON_TASK_REMOVED:
      return state.filter((task) => task.id !== payload)

    case ON_TASK_TOGGLED:
      return state.map((task) =>
        task.id === payload ? { ...task, completed: !task.completed } : task
      )

    default:
      return state
  }
}
