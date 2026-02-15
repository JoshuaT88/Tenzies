
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'
import './App.css'

function App() {
  const [diceArray, setDiceArray] = React.useState(generateAllNewDice());

 function generateAllNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            const rand = Math.ceil(Math.random() * 6)
            newDice.push(rand)
        }
        return newDice
    }
   const diceElements = diceArray.map(num => <Die value={num} />)

   function diceRoll(){
    setDiceArray(generateAllNewDice())
   }
  return (
    <>
      <main>
        <div className="diceContainer">
          {diceElements}
        </div>
        <button className="diceRoll" onClick={diceRoll}>Roll</button>
      </main>
    </>
  )
}

export default App
