const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const SET_VALUE = 'set value'
const MAKE_COFFEE = 'make coffee'

// action creators

export const increment = (amount) => ({ type: INCREMENT, payload: amount })
export const decrement = (amount) => ({ type: DECREMENT, payload: amount })
export const setValue = (value) => ({ type: SET_VALUE, payload: value })
export const makeCoffee = () => ({ type: MAKE_COFFEE })

// reducer

export default function counter(state = 0, action) {
  const { type, payload } = action

  switch (type) {
    case INCREMENT:
      return state + payload

    case DECREMENT:
      return state - payload

    case SET_VALUE:
      return payload

    default:
      return state
  }
}

// export const counter = {
//   value: 0,

//   getValue() {
//     return this.value
//   },

//   setValue(value) {
//     this.value = value
//   },

//   increment(amount) {
//     this.value += amount
//   },
// }

// class Counter {
//   constructor(value = 0) {
//     this.value = value
//   }

//   increment(amount) {
//     this.value += amount
//   }

//   decrement(amount) {
//     this.value -= amount
//   }

//   getValue() {
//     return this.value
//   }

//   setValue(value) {
//     this.value = value
//   }
// }
