// import { useEffect, useState } from "react"
// import { keyboards } from "src/keyboards.js"

// const Keyboard = ({ layout }) => {
//   const layoutConfig = keyboards[layout]
//   const [LayoutComponent, setLayoutComponent] = useState(layoutConfig.component)

//   useEffect(() => {
//     import(layoutConfig.stylesheet).catch((err) => console.error(err))
//   }, [layout])

//   if (!LayoutComponent) return null

//   return <LayoutComponent />
// }

// export default Keyboard
