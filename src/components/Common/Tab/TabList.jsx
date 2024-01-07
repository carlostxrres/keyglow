import React from "react"
import "src/components/Common/Tab/Tabs.scss"
import "src/components/Common/Button/Buttons.scss"
import { Tab } from "src/components/Common/Tab/Tab.jsx"
import Button from "src/components/Common/Button/Button.jsx"

export const TabList = ({ labels }) => {
  return (
    <div className="tab-list buttons">
      {labels.map((label, index) => (
        <Tab key={index} index={index} label={label} />
      ))}
      <Button />
    </div>
  )
}
