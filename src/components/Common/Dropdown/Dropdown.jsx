import { useState } from "react"
import "src/components/Common/Dropdown/Dropdown.css"
import { Caret } from "src/components/Icons.jsx"

export function Dropdown({ title, children }) {
  // To do: change content by the children prop
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  const isOpenClassName = open ? "active" : "inactive"

  return (
    <div onClick={toggleOpen} className={`dropdown ${isOpenClassName}`}>
      <div className="dropdown-title">
        <span>
          <Caret />
        </span>
        <span>{title}</span>
      </div>
      <div className="dropdown-content">{children}</div>
    </div>
  )
}
