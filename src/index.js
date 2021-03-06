import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { HashRouter as Router } from 'react-router-dom'
import './styles/global.scss'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register()
reportWebVitals()
