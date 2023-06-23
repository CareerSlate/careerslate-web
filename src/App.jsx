import { Header } from "./components"
import style from "./style"

function App() {
  return (
    <div className="w-ful">
      {/* header */}
      <div className={`w-full ${style.flexStart} ${style.paddingX} shadow-lg`}>
        <div className={`${style.boxWidth} `}>
          <Header />
        </div>
      </div>
    </div>
  )
}

export default App
