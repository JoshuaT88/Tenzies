
import React from 'react'
import Die from './components/Die'
import './App.css'
import { nanoid } from 'nanoid'

export default function App() {
    const [dice, setDice] = React.useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: true,
                id: nanoid()
            }))
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    function Hold(id){
      console.log(id)
    }

    const diceElements = dice.map(dieObj => <Die 
      key={dieObj.id} 
      value={dieObj.value} 
      isHeld={dieObj.isHeld} 
      onClick={() => Hold(dieObj.id)}
      
      />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}
