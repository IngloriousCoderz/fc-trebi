import classes from './list.module.css'

// presentational component

function List({ tasks, onSpanClick, onButtonClick }) {
  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={completed ? classes.completed : null}
            onClick={onSpanClick(id)}
          >
            {text}
          </span>
          &nbsp;
          <button onClick={onButtonClick(id)}>x</button>
        </li>
      ))}
    </ul>
  )
}

export default List
