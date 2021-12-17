import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectTasks,
  fetchTasks,
  onTaskRemovedRemotely,
  onTaskToggledRemotely,
} from '../root-reducer'
import ListComponent from './list'

function List() {
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const handleSpanClick = (id) => (event) => {
    dispatch(onTaskToggledRemotely(id))
  }

  const handleButtonClick = (id) => (event) => {
    dispatch(onTaskRemovedRemotely(id))
  }

  return (
    <ListComponent
      tasks={tasks}
      onSpanClick={handleSpanClick}
      onButtonClick={handleButtonClick}
    />
  )
}

export default List
