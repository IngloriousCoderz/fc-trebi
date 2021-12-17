// action types
const ADD_TASK = 'add task'
const REMOVE_TASK = 'remove task'
const TOGGLE_COMPLETED = 'toggle completed'

// action creators
export const addTask = (text) => ({ type: ADD_TASK, payload: text })
export const removeTask = (id) => ({ type: REMOVE_TASK, payload: id })
export const toggleCompleted = (id) => ({ type: TOGGLE_COMPLETED, payload: id })

// reducer

export default function todoList(state = { text: '', tasks: [] }, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_TASK:
      const maxId = state.tasks.length
        ? state.tasks[state.tasks.length - 1].id
        : 0
      return {
        text: '',
        tasks: [...state.tasks, { id: maxId + 1, text: payload }],
      }

    case REMOVE_TASK:
      return {
        text: state.text,
        tasks: state.tasks.filter((task) => task.id !== payload),
      }

    case TOGGLE_COMPLETED:
      return {
        text: state.text,
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, completed: !task.completed } : task
        ),
      }

    default:
      return state
  }
}
