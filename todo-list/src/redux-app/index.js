import { Provider } from 'react-redux'

import AppComponent from './app'

import { store } from './store'

function App({ name }) {
  return (
    <Provider store={store}>
      <AppComponent name={name} />
    </Provider>
  )
}

export default App
