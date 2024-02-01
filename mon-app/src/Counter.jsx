import React, { useState } from "react"

export default function Counter() {
    const counterIncrement = () => {setCounterValue(counterValue + 1)}
    const counterDecrement = () => {setCounterValue(counterValue - 1)}
    let [counterValue, setCounterValue] = useState(0) 
    return (
            <div className="counterWrapper">
                <p className="counterDisplay">{counterValue}</p>
                <button onClick={counterIncrement}>+</button>
                <button onClick={counterDecrement}>-</button>
            </div>
    )
}