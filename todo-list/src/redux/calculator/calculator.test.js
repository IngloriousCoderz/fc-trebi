// TDD - Test-Driven Development
// BDD - Behavior-Driven Development

import * as calculator from './calculator'

it('should sum two numbers', () => {
  // expect(calculator.sum(2, 3)).toBe(5)

  // GIVEN
  const a = 2
  const b = 3
  const expectedResult = 5

  // WHEN
  const result = calculator.sum(a, b)

  // THEN
  expect(result).toBe(expectedResult)
})

it('should treat null values as zeroes', () => {
  // GIVEN
  const a = null
  const b = 3
  const expectedResult = 3

  // WHEN
  const result = calculator.sum(a, b)

  // THEN
  expect(result).toBe(expectedResult)
})

it('should treat first undefined parameter as zero', () => {
  // GIVEN
  const a = undefined
  const b = 3
  const expectedResult = 3

  // WHEN
  const result = calculator.sum(a, b)

  // THEN
  expect(result).toBe(expectedResult)
})

it('should treat second undefined parameter as zero', () => {
  // GIVEN
  const a = 2
  const b = undefined
  const expectedResult = 2

  // WHEN
  const result = calculator.sum(a, b)

  // THEN
  expect(result).toBe(expectedResult)
})
