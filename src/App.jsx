import { Provider } from 'react-redux'
import Body from './components/Body'
import {persistor} from './components/utils/redux/appStore'
import appstore from './components/utils/redux/appStore'
import { PersistGate } from 'redux-persist/integration/react'





function App() {
  

  return (
    <Provider store={appstore}>
      <PersistGate loading={null} persistor={persistor}>
        <Body/>
      </PersistGate>
    </Provider>
     
   
  )
}

export default App
