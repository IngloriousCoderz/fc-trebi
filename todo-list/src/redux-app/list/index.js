import { useDispatch, useSelector } from 'react-redux'

import { onTaskRemoved, onTaskToggled, selectTasks } from '../root-reducer'
import ListComponent from './list'

function List() {
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  const handleSpanClick = (id) => (event) => {
    dispatch(onTaskToggled(id))
  }

  const handleButtonClick = (id) => (event) => {
    dispatch(onTaskRemoved(id))
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
