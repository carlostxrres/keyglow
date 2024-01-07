import React from "react"
import "src/components/Common/Tab/Tabs.scss"
import { useTab } from "src/components/Common/Tab/TabProvider.jsx"

export const Tab = ({ index, label }) => {
  const { activeTab, setActiveTab } = useTab()
  return (
    <button
      className={`tab-button ${activeTab === index ? "active" : ""}`}
      onClick={() => setActiveTab(index)}
    >
      {label}
    </button>
  )
}
