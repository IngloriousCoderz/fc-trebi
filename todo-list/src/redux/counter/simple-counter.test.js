import counter, {
  increment,
  decrement,
  setValue,
  makeCoffee,
} from './simple-counter'

/**
 * THREE PRINCIPLES:
 *
 * 1. Single Source Of Truth (Store)
 * 2. Immutable State
 * 3. Changes Through Pure Functions (Reducers)
 */

it('should initialize the state', () => {
  const beforeState = undefined
  const action = makeCoffee()
  const afterState = 0

  const state = counter(beforeState, action)

  expect(state).toBe(afterState)
})

it('should increment by an amount', () => {
  const beforeState = 2
  const action = increment(3)
  const afterState = 5

  const state = counter(beforeState, action)

  expect(state).toBe(afterState)
})

it('should decrement by an amount', () => {
  const beforeState = 2
  const action = decrement(3)
  const afterState = -1

  const state = counter(beforeState, action)

  expect(state).toBe(afterState)
})

it('should set a specific value', () => {
  const beforeState = 2
  const action = setValue(3)
  const afterState = 3

  const state = counter(beforeState, action)

  expect(state).toBe(afterState)
})

it('should apply multiple actions', () => {
  const beforeState = 2
  const actions = [increment(3), decrement(4)]
  const afterState = 1

  const state = actions.reduce(counter, beforeState)

  expect(state).toBe(afterState)
})
