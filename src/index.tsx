import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import './styles/reset.scss'

import ApolloContext from './components/contexts/ApolloContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloContext>
      <App /> 
    </ApolloContext>
  </React.StrictMode>
)
