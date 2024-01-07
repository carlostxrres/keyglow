// import React from "react"
// import "material-icons/iconfont/material-icons.css"
import "material-symbols"

export const Icon = ({
  i,
  className = "",
  size = "20px",
  weight = "200",
  color = "white",
}) => {
  const style = {
    fontSize: size,
    fontWeight: weight,
    color: color,
  }

  return (
    <span style={style} className={`material-symbols-outlined ${className}`}>
      {i}
    </span>
  )
}
