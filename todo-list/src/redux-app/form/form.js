function Form({ text, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={onChange}
      />
    </form>
  )
}

export default Form
