import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from './routes/App'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
