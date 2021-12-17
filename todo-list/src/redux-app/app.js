import Form from './form'
import List from './list'

function App({ name }) {
  return (
    <>
      <h1>{name}'s To-Do List</h1>
      <Form />
      <List />
    </>
  )
}

export default App
