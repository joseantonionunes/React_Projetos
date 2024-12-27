// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import { Header } from './components/Header'
import { Section } from './components/Section'

function App() {
  
  return (
    <div className='App'>

      <Header/>

      <main>

        <Section 
        title = "meus jogos"
        subtitle = "Os games que eu mais curto jogar!"
        />
        <Section 
        title = "Canais e streamers"
        subtitle = "Lista de canais e transmissões que não perco!"
        />

      </main>
    </div>
  )
}

export default App
