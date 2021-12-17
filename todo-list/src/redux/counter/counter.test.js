import counter, { increment, decrement, setValue, makeCoffee } from './counter'

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
  const afterState = { value: 0 }

  const state = counter(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should increment by an amount', () => {
  const beforeState = { value: 2 }
  const action = increment(3)
  const afterState = { value: 5 }

  const state = counter(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should decrement by an amount', () => {
  const beforeState = { value: 2 }
  const action = decrement(3)
  const afterState = { value: -1 }

  const state = counter(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should set a specific value', () => {
  const beforeState = { value: 2 }
  const action = setValue(3)
  const afterState = { value: 3 }

  const state = counter(beforeState, action)

  expect(state).toEqual(afterState)
})

it('should apply multiple actions', () => {
  const beforeState = { value: 2 }
  const actions = [increment(3), decrement(4)]
  const afterState = { value: 1 }

  const state = actions.reduce(counter, beforeState)

  expect(state).toEqual(afterState)
})

it('should return the same state when action is not recognized', () => {
  const beforeState = { value: 2 }
  const action = makeCoffee()

  const state = counter(beforeState, action)

  expect(state).toBe(beforeState)
})
