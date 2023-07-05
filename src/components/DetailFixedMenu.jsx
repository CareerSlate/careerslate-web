import { useDispatch, useSelector } from "react-redux"
import style from "../style"
import Button from "./Button"
import { setActiveMenuOption } from "../store/schoolDetailSlice"

const DetailFixedMenu = () => {
  const menuOptions = ["summary", "information", "facilities", "location", "gallery"]

  const active = useSelector(store => store.schoolDetail.activeMenuOption)
  const dispatch = useDispatch()

  function handleActive(e) {
    dispatch(setActiveMenuOption(e.target.innerText.toLowerCase()))
  }
  return (
    <div className={`w-full sticky top-0 z-[50] lg:z-[150] ${style.flexCenter} bg-white shadow-lg border-b`}>
      <nav className={`${style.boxWidth}  ${style.marginX}`}>
        <div className="px-2 py-3 lg:py-4 flex justify-between items-center gap-4 overflow-x-scroll scrollbar-hide">
          {/* menu */}
          <div className="flex items-center gap-4 gap-6 lg:gap-12">
            {menuOptions.map(option => {
              return (
                <a key={option} href={`#${option}`} onClick={handleActive} className={`font-medium capitalize font-semibold ${active === option ? "text-secondary hover:text-primary" : "text-primary  hover:text-slate-400"}`}>
                  {option}
                </a>
              )
            })}
          </div>
          {/* claim school */}
          <div>
            <Button name="claim school" style="bg-[#ffc107] text-gray-800 py-2 border-[#ffc107] hover:bg-slate-50 !rounded-md whitespace-nowrap" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default DetailFixedMenu
