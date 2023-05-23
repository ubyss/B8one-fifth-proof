import { useState } from 'react'
import { UserProvider } from './components/contexts/UserContext'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </div>
  )
}

export default App
