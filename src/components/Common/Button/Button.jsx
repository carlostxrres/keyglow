import React from "react"
import domtoimage from "dom-to-image"
import { Camera1, Camera2 } from "src/components/Icons.jsx"

export default function DownloadButton() {
  const format = "png"

  const getDownloadData = {
    png: async (node) => {
      const blob = await domtoimage.toBlob(node, { scale: 5 })
      return URL.createObjectURL(blob)
    },
    jpeg: async (node) => {
      return await domtoimage.toJpeg(node, { quality: 1 })
    },
  }

  const downloadFile = (downloadData) => {
    const link = document.createElement("a")
    link.href = downloadData
    link.download = `keys.${format}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadImage = async () => {
    try {
      const node = document.querySelector("main")
      if (!node) throw new Error("Element not found")

      const downloadData = await getDownloadData[format](node)
      downloadFile(downloadData)
    } catch (error) {
      console.error("oops, something went wrong!", error)
    }
  }

  return (
    <button
      className="main"
      title="Download keyboard image"
      onClick={downloadImage}
    >
      <Camera1 />
    </button>
  )
}
