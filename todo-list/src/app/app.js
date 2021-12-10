import Form from './form'
import List from './list'

function App({ name, tasks, onSubmit, onSpanClick, onButtonClick }) {
  return (
    <>
      <h1>{name}'s To-Do List</h1>
      <Form onSubmit={onSubmit} />
      <List
        tasks={tasks}
        onSpanClick={onSpanClick}
        onButtonClick={onButtonClick}
      />
    </>
  )
}

export default App
