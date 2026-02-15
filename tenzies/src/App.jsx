import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'
import './App.css'

function App() {
  
function generateAllNewDice(count = 10) {
  
  return Array.from({ length: count }, () => Math.floor(Math.random() * 6) + 1)
}
console.log(generateAllNewDice())
  return (
    <>
      <main>
        <div className="diceContainer">
        <Die 
          value='1'
        />
        <Die 
          value='2'
        />
        <Die 
          value='3'
        />
        <Die 
          value='4'
        />
        <Die 
          value='5'
        />
        <Die 
          value='6'
        />
        <Die 
          value='1'
        />
        <Die 
          value='2'
        />
        <Die 
          value='3'
        />
        <Die 
          value='4'
        />
        </div>
      </main>
    </>
  )
}

export default App
