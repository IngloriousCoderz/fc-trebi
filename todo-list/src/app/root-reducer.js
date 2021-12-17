import { combineReducers } from 'redux'

import * as api from './services/api'
import text from './form/form.slice'
import tasks from './list/list.slice'

import {
  ON_TEXT_UPDATED,
  ON_TASK_ADDED,
  ON_TASK_REMOVED,
  ON_TASK_TOGGLED,
  ON_TASKS_UPDATED,
} from './action-types'

// action creators
export const onTextUpdated = (text) => ({
  type: ON_TEXT_UPDATED,
  payload: text,
})
export const onTasksUpdated = (tasks) => ({
  type: ON_TASKS_UPDATED,
  payload: tasks,
})
export const onTaskAdded = (task) => ({ type: ON_TASK_ADDED, payload: task })
export const onTaskRemoved = (id) => ({ type: ON_TASK_REMOVED, payload: id })
export const onTaskToggled = (id) => ({ type: ON_TASK_TOGGLED, payload: id })

// thunks

export const fetchTasks = () => async (dispatch) => {
  const tasks = await api.fetchTasks()
  dispatch(onTasksUpdated(tasks))
}

export const onTaskAddedRemotely = (text) => async (dispatch) => {
  const task = await api.addTask({ text })
  dispatch(onTaskAdded(task))
}

export const onTaskRemovedRemotely = (id) => async (dispatch) => {
  await api.deleteTask(id)
  dispatch(onTaskRemoved(id))
}

export const onTaskToggledRemotely = (id) => async (dispatch, getState) => {
  const tasks = selectTasks(getState())
  const { completed } = tasks.find((task) => task.id === id)
  await api.updateTask(id, { completed: !completed })
  dispatch(onTaskToggled(id))
}

// root reducer

export default combineReducers({ text, tasks })

// selectors

export const selectText = (state) => state.text
export const selectTasks = (state) => state.tasks
