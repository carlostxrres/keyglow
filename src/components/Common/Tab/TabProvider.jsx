import React, { createContext, useContext, useState } from "react"

export const TabContext = createContext()

export const useTab = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error("useTab must be used within a TabProvider")
  }
  return context
}

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}
