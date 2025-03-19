
import { BrowserRouter } from 'react-router-dom'
import { User } from './Components/Routes/UserRoutes'
import { Provider } from 'react-redux'
import reduxStore from './Component/Appview/Store/ReduxToolkit/ReduxToolkit/Store/Store'

function App() {

  return (
    <Provider store={reduxStore}>
      {/* // <ContextProvider> */}
      <BrowserRouter>
        <User />
      </BrowserRouter>
      {/* // </ContextProvider> */}
    </Provider>
  )
}

export default App
