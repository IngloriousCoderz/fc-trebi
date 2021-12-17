import { createStore } from 'redux'

import rootReducer, { onTaskAdded } from './todo-list'

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log('State updated', store.getState())
})

store.dispatch(onTaskAdded('Hello world!'))
