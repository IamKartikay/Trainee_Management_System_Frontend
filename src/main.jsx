import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import "./index.css"
import { StateContext } from './context/StateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContext>
    <BrowserRouter>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </BrowserRouter>
  </StateContext>
)
