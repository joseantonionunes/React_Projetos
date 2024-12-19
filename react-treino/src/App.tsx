// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Section } from './components/Section';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <footer />
    </BrowserRouter>
  )
}

export default App
