import React, { useEffect, useRef } from "react"
import "src/components/Common/Tab/Tabs.scss"
import { useTab } from "src/components/Common/Tab/TabProvider.jsx"

export const TabContent = ({ index, children }) => {
  const boxRef = useRef(null)
  /*useEffect(() => {
    const box = boxRef.current
    if (!box) return

    const calculateAdjustedCoord = (mousePos, boxPos, boxDim) =>
      mousePos - boxPos - boxDim / 2
    const calculateRotationDegree = (adjustedCoord, boxDim) =>
      -1 * (adjustedCoord / boxDim) * 10

    box.style.transition = "transform .1s ease-in-out"
    function handleMouseMove(event) {
      const { width, height, x, y } = box.getBoundingClientRect()
      const { clientX, clientY } = event

      const mouseX = calculateAdjustedCoord(clientX, x, width)
      const mouseY = calculateAdjustedCoord(clientY, y, height)

      const rotateX = calculateRotationDegree(mouseY, height)
      const rotateY = calculateRotationDegree(mouseX, width)

      box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(300px)`
    }

    function handleMouseLeave() {
      box.style.transform = "rotateX(0deg) rotateY(0deg)"
    }

    box.addEventListener("mousemove", handleMouseMove)
    box.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      box.removeEventListener("mousemove", handleMouseMove)
      box.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])*/

  const { activeTab } = useTab()
  return activeTab === index ? <div ref={boxRef}>{children}</div> : null
}
