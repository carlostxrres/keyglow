import React from "react"
import { useState } from "react"

export const Key = ({ children, className, dataContent, onClick, id }) => {
  const [isHighlighted, setIsHighlighted] = useState(false)

  const handleClick = () => {
    setIsHighlighted(!isHighlighted)

    if (onClick) {
      onClick(event)
    }
  }

  const classes = ["key", className, isHighlighted ? "highlighted" : ""].join(
    " "
  )

  // some logic here

  return (
    <div className={classes} data-content={dataContent} onClick={handleClick}>
      {children}
    </div>
  )
}
