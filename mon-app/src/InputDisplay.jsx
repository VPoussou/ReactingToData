import React, { useState } from "react"

export default function InputDisplay() {
    const [currentText, setCurrentText] = useState('')
    
    return (
        <div className="InputDisplayWrapper">
            <div className="divForTextDisplay">{currentText}</div>
            <input type="text" className="inputForDisplay" value={currentText} onChange={(e) => setCurrentText(e.target.value)}/>
        </div>
    )
}