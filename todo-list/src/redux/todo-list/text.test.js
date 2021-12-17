import text from './text'
import { onTextUpdated } from './todo-list'

it('should initialize state', () => {
  const beforeState = undefined
  const action = { type: 'unknown' }
  const afterState = ''

  const state = text(beforeState, action)

  expect(state).toBe(afterState)
})

it('should set a new text', () => {
  const beforeState = 'something'
  const action = onTextUpdated('something else')
  const afterState = 'something else'

  const state = text(beforeState, action)

  expect(state).toBe(afterState)
})
