import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './template/App/index'
import { GlobalStyle } from './styled/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
