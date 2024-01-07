import React from "react"
import { useState } from "react"
// import "./Keyboard.css"

export function Key({ children, className = "", id }) {
  const [isHighlighted, setIsHighlighted] = useState(false)

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted)
  }

  const combinedClasses = `${className} ${
    isHighlighted ? "highlighted" : ""
  }`.trim()

  return (
    <li className={combinedClasses} id={id} onClick={toggleHighlight}>
      {children}
    </li>
  )
}
