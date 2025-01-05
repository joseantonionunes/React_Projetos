// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from "./routes";

import GlobalStyle from './global'

function App() {

  return (
    <>
      
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    
    </>
  )
}

export default App
