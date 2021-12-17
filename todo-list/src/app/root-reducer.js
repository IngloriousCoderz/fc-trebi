import { combineReducers } from 'redux'

import text from './form/form.slice'
import tasks from './list/list.slice'

import {
  ON_TEXT_UPDATED,
  ON_TASK_ADDED,
  ON_TASK_REMOVED,
  ON_TASK_TOGGLED,
} from './action-types'

// action creators
export const onTextUpdated = (text) => ({
  type: ON_TEXT_UPDATED,
  payload: text,
})
export const onTaskAdded = (text) => ({ type: ON_TASK_ADDED, payload: text })
export const onTaskRemoved = (id) => ({ type: ON_TASK_REMOVED, payload: id })
export const onTaskToggled = (id) => ({ type: ON_TASK_TOGGLED, payload: id })

// root reducer

export default combineReducers({ text, tasks })

// selectors

export const selectText = (state) => state.text
export const selectTasks = (state) => state.tasks
