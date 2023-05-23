import { useState } from 'react'
import { UserProvider } from './components/contexts/UserContext'
import Checkout from './components/Checkout'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Checkout />
      </UserProvider>
    </div>
  )
}

export default App
