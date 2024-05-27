import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import App from './App'

import AppRoutes from './routes/routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <AppRoutes/>
    <GlobalStyles/>
  </React.StrictMode>,
)
