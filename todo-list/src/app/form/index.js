import { useSelector, useDispatch } from 'react-redux'

import { onTextUpdated, selectText, onTaskAddedRemotely } from '../root-reducer'
import FormComponent from './form'

// container component

function Form() {
  const text = useSelector(selectText)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(onTextUpdated(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(onTaskAddedRemotely(text))
  }

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}

export default Form
