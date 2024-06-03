import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from '../src/reduxtoolkit/store.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >

    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
