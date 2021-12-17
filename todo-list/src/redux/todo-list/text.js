import { ON_TEXT_UPDATED, ON_TASK_ADDED } from './action-types'

export default function text(state = '', action) {
  const { type, payload } = action

  switch (type) {
    case ON_TEXT_UPDATED:
      return payload

    case ON_TASK_ADDED:
      return ''

    default:
      return state
  }
}
