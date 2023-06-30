import { Outlet } from "react-router-dom"
import { Header } from "./components"
import style from "./style"

function App() {
  return (
    <div className="w-full">
      {/* header */}
      <div className={`w-full ${style.flexStart} ${style.paddingX} shadow-lg`}>
        <div className={`${style.boxWidth} `}>
          <Header />
        </div>
      </div>

      <div className={`w-full ${style.flexStart} `}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
